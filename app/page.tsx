/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  HeaderSection,
  TitleSection,
  BackIcon,
  MobileTitle,
  Form,
} from "./components";

type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
};

export default function Home(): JSX.Element {
  const router = useRouter();

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validate: (values: FormValues): Partial<FormValues> => {
      const errors: Partial<FormValues> = {};

      if (!values.mobile) {
        errors.mobile = "Required";
      } else if (values.mobile.length < 10) {
        errors.mobile = "Invalid phone number";
      }

      return errors;
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      mobile: Yup.string().required("Required"),
    }),

    onSubmit: (): void => {
      if (formik.isValid) {
        return router.push("/success");
      }
    },
  });

  const handlePhoneChange = (val: string): void => {
    formik.setFieldValue("mobile", val);
  };

  return (
    <main>
      <HeaderSection />
      <MobileTitle />
      <BackIcon />
      <TitleSection />
      <Form formik={formik} handlePhoneChange={handlePhoneChange} />
    </main>
  );
}
