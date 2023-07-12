/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function SuccessMessageSection(): JSX.Element {
  return (
    <section>
      <div className="relative flex flex-col md:flex-row justify-center items-center bg-light-yellow rounded-2xl md:rounded-3.5xl px-[67px] py-[74px] w-full md:w-96 drop-shadow-2xl md:drop-shadow-3xl z-10">
        <Image
          className="hidden md:block"
          src="/images/success_icon.svg"
          width={75}
          height={75}
          alt="success icon"
          priority
        />
        <Image
          className="md:hidden block"
          src="/images/success_icon.svg"
          width={50}
          height={50}
          alt="success icon"
          priority
        />
        <h2 className="text-2xl font-semibold mt-3.5 md:ml-6.5 text-center">
          You've been successfully verified!
        </h2>
      </div>
      <div className="-mt-5 relative md:hidden pt-14 pb-10 px-5 bg-white rounded-b-2xl drop-shadow z-0">
        <p className="text-sm font-extralight text-center">
          You'll be automatically verified for all future <br /> orders. Your
          orders will be dispatched <br /> without delay.
        </p>
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
          src="/images/vm_logo.svg"
          width={76}
          height={18}
          alt="logo"
          priority
        />
      </p>
    </section>
  );
}
