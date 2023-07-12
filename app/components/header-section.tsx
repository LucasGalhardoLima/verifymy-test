import Image from "next/image";

export default function HeaderSection(): JSX.Element {
  return (
    <section className="flex items-center justify-between">
      <Image
        className="hidden md:block"
        src="/images/logo.svg"
        width={135}
        height={25}
        alt="logo"
        priority
      />
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
      <div className="shadow-lg p-3 text-center rounded-full bg-white w-[50px]">
        <strong className="text-lg">5</strong>
        <span className="text-sm">/5</span>
      </div>
    </section>
  );
}
