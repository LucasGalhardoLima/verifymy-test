import Image from "next/image";
// import bg from "../app/assets/bg.png";
// import logo from "../app/assets/logo.png";
import "./globals.css";

export const metadata = {
    title: "verifymyage",
    description: "Login",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="hidden md:block">
                        <Image
                            className="bg-contain"
                            src="/bg.svg"
                            width={960}
                            height={500}
                            alt="login background"
                            priority
                        />
                    </div>
                    <div className="pl-6 pr-5 pt-5 md:py-12 md:pr-12 lg:pl-[89px] bg-white-smoke md:bg-white h-screen">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
