"use client";

import Image from "next/image";

export default function MobileHeaderSection(): JSX.Element {
  return (
    <div className="md:hidden flex items-center">
      <div className="w-[24px] h-[24px] rounded-full bg-grey flex items-center justify-center hover:bg-white-smoke cursor-pointer">
        <Image
          src="/images/back_icon.svg"
          width={9}
          height={9}
          alt="back icon"
          priority
        />
      </div>
      <h1 className="ml-2 text-0.5xl font-semibold">Join VerifyMyAge</h1>
    </div>
  );
}
