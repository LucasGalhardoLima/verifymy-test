/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import "react-phone-input-2/lib/material.css";
import { useState } from "react";
import MobileFooter from "./components/mobile-footer";
import DesktopFooter from "./components/desktop-footer";

type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
};

export default function Home(): JSX.Element {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validate: (values) => {
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
      password: Yup.string().required("Required"),
      mobile: Yup.string().required("Required"),
    }),

    onSubmit: () => {
      // if (!formik.values.mobile) {
      //   formik.setTouched({ mobile: true });
      //   formik.setFieldError("mobile", "Required");
      //   formik.setFieldTouched("mobile", true);
      //   formik.setErrors({ mobile: "Required" });
      // 	console.log(formik.touched.mobile, formik.errors.mobile)
      //   return;
      // }
      if (formik.isValid) {
        return router.push("/success");
      }
    },
  });

  const handlePhoneChange = (val: string) => {
    formik.setFieldValue("mobile", val);
  };

  return (
    <main>
      <section className="flex items-center justify-between">
        <Image
          className="hidden md:block"
          src="/logo.svg"
          width={135}
          height={25}
          alt="logo"
          priority
        />
        <div className="md:hidden flex items-center">
          <div className="w-[24px] h-[24px] rounded-full bg-grey flex items-center justify-center hover:bg-white-smoke cursor-pointer">
            <Image
              src="/back_icon.svg"
              width={9}
              height={9}
              alt="back icon"
              priority
            />
          </div>
          <h1 className="ml-2 text-0.5xl font-semibold">Join VerifyMyAge</h1>
        </div>
        <div className="shadow-lg p-3 text-center rounded-full bg-white w-[50px]">
          <strong className="text-lg">5</strong>
          <span className="text-sm">/5</span>
        </div>
      </section>
      <p className="text-sm font-thin md:hidden ml-[35px]">
        Let's start by setting up
        <br /> your login details.
      </p>
      <section className="hidden md:flex w-[44px] h-[44px] mt-[66px] rounded-full bg-grey items-center justify-center hover:bg-white-smoke cursor-pointer">
        <Image
          src="/back_icon.svg"
          width={14}
          height={14}
          alt="back icon"
          priority
        />
      </section>
      <section className="hidden md:block mt-5">
        <h1 className="text-4.5xl font-semibold">Join VerifyMyAge</h1>
        <p className="text-lg font-thin">
          Let's start by setting up your login details.
        </p>
      </section>
      <form
        className="mt-[61px] w-full md:w-2/3"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-6">
          <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
            <label
              htmlFor="fullName"
              className={`${
                formik.touched.fullName && formik.errors.fullName
                  ? "text-warning"
                  : "text-dark-grey"
              } block text-sm font-medium leading-6`}
            >
              Full Name
            </label>
          </div>

          <div>
            <input
              className={`${
                formik.touched.fullName && formik.errors.fullName
                  ? "ring-warning"
                  : "ring-sonic-silver focus:ring-dark-grey"
              } bg-white-smoke md:bg-white block w-full rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-warning text-xs font-semibold ml-2">
                {formik.errors.fullName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
            <label
              htmlFor="email"
              className={`${
                formik.touched.email && formik.errors.email
                  ? "text-warning"
                  : "text-dark-grey"
              } block text-sm font-medium leading-6`}
            >
              Email Address
            </label>
          </div>

          <div>
            <input
              className={`${
                formik.touched.email && formik.errors.email
                  ? "ring-warning"
                  : "ring-sonic-silver focus:ring-dark-grey"
              } bg-white-smoke md:bg-white block w-full rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-warning text-xs font-semibold ml-2">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mb-6">
          <PhoneInput
            country={"gb"}
            value={formik.values.mobile}
            onChange={handlePhoneChange}
            specialLabel="Mobile"
            containerClass={
              formik.touched.mobile && formik.errors.mobile
                ? "input-warning"
                : "ring-sonic-silver focus:ring-dark-grey"
            }
          />
					{formik.touched.mobile && formik.errors.mobile ? (
              <p className="text-warning text-xs font-semibold ml-2">
                {formik.errors.mobile}
              </p>
            ) : null}
        </div>

        <div className="mb-6">
          <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5 z-10">
            <label
              htmlFor="password"
              className={`${
                formik.touched.password && formik.errors.password
                  ? "text-warning"
                  : "text-dark-grey"
              } block text-sm font-medium leading-6`}
            >
              Password
            </label>
          </div>

          <div className="relative mt-2 rounded-md">
            <input
              className={`${
                formik.touched.password && formik.errors.password
                  ? "ring-warning"
                  : "ring-sonic-silver focus:ring-dark-grey"
              } bg-white-smoke md:bg-white block w-full rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-5">
              {!showPassword ? (
                <EyeIcon
                  className="h-5 w-5 text-sonic-silver"
                  aria-hidden="true"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeSlashIcon
                  className="h-5 w-5 text-sonic-silver"
                  aria-hidden="true"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p className="text-warning text-xs font-semibold ml-2">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <div className="relative flex items-center mt-7.5">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-6 w-6 rounded border-gray-300 text-light-yellow focus:ring-light-yellow"
              onChange={() => setTerms(!terms)}
            />
          </div>
          <div className="ml-4 text-sm leading-3">
            <span id="offers-description" className="text-dark-grey text-xs">
              Tick this box to confirm you've read and agreed to our{" "}
              <span className="underline">Terms</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </span>
          </div>
        </div>

        <hr className="mt-[25px] border-foggy-grey md:hidden" />
        <p className="text-xxs font-light flex text-center justify-center items-center text-foggy-grey my-3 md:hidden">
          {" "}
          <LockClosedIcon
            className="h-2.5 w-2.5 text-foggy-grey mr-1.5"
            aria-hidden="true"
          />{" "}
          Secured by{" "}
          <Image
            className="ml-1.5"
            src="/vm_logo.svg"
            width={76}
            height={18}
            alt="logo"
            priority
          />
        </p>

        <DesktopFooter terms={terms} />

        <MobileFooter terms={terms} />
      </form>
    </main>
  );
}
