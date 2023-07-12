import Image from "next/image";

export default function Logo(): JSX.Element {
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
    </section>
  );
}
