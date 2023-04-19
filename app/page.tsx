/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            mobile: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        }),
        onSubmit: () => {
            router.push("/verification-success");
        },
    });

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
                    <h1 className="ml-2 text-0.5xl font-semibold">
                        Join VerifyMyAge
                    </h1>
                </div>
                <div className="shadow-lg p-3 text-center rounded-full bg-white w-[50px]">
                    <strong className="text-lg">5</strong>
                    <span className="text-sm">/5</span>
                </div>
            </section>
            <p className="text-sm font-extralight md:hidden ml-[35px]">
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
                <p className="text-lg font-extralight">
                    Let's start by setting up your login details.
                </p>
            </section>
            <form className="mt-[61px]" onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                    <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
                        <label
                            htmlFor="fullName"
                            className={`${formik.touched.fullName && formik.errors.fullName ? 'text-warning' : 'text-dark-grey'} block text-sm font-medium leading-6`}
                        >
                            Full Name
                        </label>
                    </div>

                    <div>
                        <input
                            className={`${formik.touched.fullName && formik.errors.fullName ? 'ring-warning' : 'ring-sonic-silver focus:ring-dark-grey' } bg-white-smoke md:bg-white block w-full md:w-2/3 rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
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
                            className={`${formik.touched.email && formik.errors.email ? 'text-warning' : 'text-dark-grey'} block text-sm font-medium leading-6`}
                        >
                            Email Address
                        </label>
                    </div>

                    <div>
                        <input
                            className={`${formik.touched.email && formik.errors.email ? 'ring-warning' : 'ring-sonic-silver focus:ring-dark-grey' } bg-white-smoke md:bg-white block w-full md:w-2/3 rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
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
                        country={"us"}
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        specialLabel="Mobile"
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                        <p className="text-warning text-xs font-semibold ml-2">
                            {formik.errors.mobile}
                        </p>
                    ) : null}
                </div>

                <div className="mb-6">
                    <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-dark-grey"
                        >
                            Password
                        </label>
                    </div>

                    <div>
                        <input
                            className="bg-white-smoke md:bg-white block w-full md:w-2/3 rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset ring-sonic-silver placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-grey sm:text-sm sm:leading-6"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-warning text-xs font-semibold ml-2">
                                {formik.errors.password}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="relative flex items-center mt-7.5">
                    <div className="flex h-6 items-center">
                        <input
                            id="offers"
                            aria-describedby="offers-description"
                            name="offers"
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 text-light-yellow focus:ring-light-yellow"
                        />
                    </div>
                    <div className="ml-4 text-sm leading-3">
                        <span
                            id="offers-description"
                            className="text-dark-grey text-xs"
                        >
                            Tick this box to confirm you’ve read and agreed to
                            our Terms and Privacy Policy.
                        </span>
                    </div>
                </div>

                <div className="mt-[63px] grid-cols-1 md:flex md:items-center">
                    <button
                        className="w-full md:w-auto p-3.5 md:p-7 mb-5 md:mb-0 bg-light-yellow rounded-4xl flex items-center justify-center"
                        type="submit"
                    >
                        <Image
                            className="mr-2.5"
                            src="/lock_icon.svg"
                            width={10}
                            height={10}
                            alt="lock icon"
                            priority
                        />
                        Save
                    </button>

                    <button
                        className="w-full md:w-auto md:ml-5 p-3.5 md:p-7 rounded-4xl border border-dark-grey"
                        type="button"
                    >
                        Got a VerifyMyAge account? Sign in
                    </button>
                </div>
            </form>
        </main>
    );
}
