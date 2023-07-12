

import Image from "next/image";
import Stepper from "./stepper";
import MobileHeaderSection from "./mobile-header-section";

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
      <MobileHeaderSection />
      <Stepper />
    </section>
  );
}
