"use client";

import { useState } from "react";
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
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen((prev) => !prev);

    return (
        <>
            {!isHomePage && <Header onSearchToggle={toggleSearch} isSearchOpen={isSearchOpen} />}
            {!isHomePage && <MenuBar />}
            {!isHomePage && isSearchOpen && <GlobalSearchBar />}
            {children}
            {!isHomePage && <Footer />}
        </>
    );
}
