"use client";

import { Logo, SuccessMessageSection, SuccessTitle } from "../components";

export default function Success(): JSX.Element {
  return (
    <main id="success-card">
      <Logo />
      <SuccessTitle />
      <SuccessMessageSection />
    </main>
  );
}
