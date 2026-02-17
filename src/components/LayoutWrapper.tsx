"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import GlobalSearchBar from "@/components/GlobalSearchBar";

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
            {!isHomePage && <GlobalSearchBar />}
            {children}
            {!isHomePage && <Footer />}
        </>
    );
}
