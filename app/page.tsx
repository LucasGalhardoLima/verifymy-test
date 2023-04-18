/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const inter = Inter({ subsets: ["latin"] });

type Errors = {
    firstName?: string;
    lastName?: string;
    email?: string;
};

export default function Home() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}

                <label htmlFor="email">Email Address</label>
                <input
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

                <button type="submit">Submit</button>
            </form>
            {/* <form action="/send-data-here" method="post">
                <label
                    htmlFor="name"
                    className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
                >
                    Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-full border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jane Smith"
                    />
                </div>
                <label
                    htmlFor="name"
                    className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
                >
                    Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-full border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jane Smith"
                    />
                </div>
                <label
                    htmlFor="name"
                    className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
                >
                    Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-full border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jane Smith"
                    />
                </div>
                <label
                    htmlFor="name"
                    className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
                >
                    Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-full border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jane Smith"
                    />
                </div>
            </form> */}

            <Link href="/verification-success">Next</Link>
        </main>
    );
}
