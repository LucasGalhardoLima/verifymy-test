import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "verifymyage",
  description: "Login",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="hidden md:block">
            <Image
              className="bg-contain"
              src="/images/bg.svg"
              width={960}
              height={500}
              alt="login background"
              priority
            />
          </div>
          <div className="pl-5 md:pl-6 pr-5 pt-5 md:py-12 md:pr-12 lg:pl-[89px] bg-white-smoke md:bg-white h-screen">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
