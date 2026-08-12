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
  const isAdmin = pathname?.startsWith("/admin");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header onSearchToggle={toggleSearch} isSearchOpen={isSearchOpen} />
      <MenuBar />
      <GlobalSearchBar />
      {children}
      <Footer />
    </>
  );
}
