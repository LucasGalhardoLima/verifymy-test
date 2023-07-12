"use client";

import Image from "next/image";

export default function BackIcon(): JSX.Element {
  return (
    <section className="hidden md:flex w-[44px] h-[44px] mt-[66px] rounded-full bg-grey items-center justify-center hover:bg-white-smoke cursor-pointer">
      <Image
        src="/images/back_icon.svg"
        width={14}
        height={14}
        alt="back icon"
        priority
      />
    </section>
  );
}
