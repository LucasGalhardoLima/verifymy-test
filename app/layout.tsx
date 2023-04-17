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
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Image
                            className="bg-contain"
                            src="/bg.svg"
                            width={960}
                            height={500}
                            alt="login background"
                            priority
                        />
                    </div>
                    <div className="py-12 pr-12 pl-[89px]">
                        <div className="flex justify-between">
                            <Image
                                src="/logo.svg"
                                width={135}
                                height={25}
                                alt="logo"
                                priority
                            />
                            <div className="shadow-lg p-3 text-center rounded-full bg-white w-[50px]">
                                <strong className="text-lg">5</strong>
                                <span className="text-sm">/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
