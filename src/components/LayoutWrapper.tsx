"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <>
            {!isHomePage && <Header />}
            {!isHomePage && <MenuBar />}
            {children}
            {!isHomePage && <Footer />}
        </>
    );
}
