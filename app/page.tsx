/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
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
                    <div className="bg-white absolute ml-4 -mt-3 px-1.5">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            <p className="bg-white">Full Name</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className="block w-2/3 rounded-full border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sonic-silver placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-grey sm:text-sm sm:leading-6"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <div>{formik.errors.fullName}</div>
                        ) : null}
                    </div>
                </div>

                <div className="mb-6">
                    <div className="bg-white absolute ml-4 -mt-3 px-1.5">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email Address
                        </label>
                    </div>

                    <div>
                        <input
                            className="block w-2/3 rounded-full border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sonic-silver placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-grey sm:text-sm sm:leading-6"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div className="mb-6">
                    <div className="bg-white absolute ml-4 -mt-3 px-1.5">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                    </div>

                    <div>
                        <input
                            className="block w-2/3 rounded-full border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sonic-silver placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-grey sm:text-sm sm:leading-6"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
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

                <div className="mt-[63px] flex items-center">
                    <button
                        className="p-7 bg-light-yellow rounded-4xl flex items-center"
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
                        className="ml-5 p-7 rounded-4xl border border-dark-grey"
                        type="button"
                    >
                        Got a VerifyMyAge account? Sign in
                    </button>
                </div>
            </form>
        </main>
    );
}
