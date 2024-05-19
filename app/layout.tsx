import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mainak's Portfolio",
    description: "A modern website portfolio to showcase Mainak Chakraborty",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={bricolage_grotesque.className}>{children}</body>
        </html>
    );
}
