"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type MenuLink = {
  type: "link";
  label: string;
  href: string;
};

type MenuDropdown = {
  type: "dropdown";
  label: string;
  items: { label: string; href: string }[];
};

type MenuItem = MenuLink | MenuDropdown;

const menuItems: MenuItem[] = [
  { type: "link", label: "UNDERSTANDING<br />FAMILY VIOLENCE", href: "/familyviolence" },
  { type: "link", label: "WORKING IN<br />FAMILY VIOLENCE", href: "/volunteer" },
  { type: "link", label: "TRAINING &<br />DEVELOPMENT", href: "/training" },
  { type: "link", label: "CONSULTANCY<br />SERVICES", href: "/consultancy" },
  { type: "link", label: "POLICY &<br />ADVOCACY", href: "/policy" },
  {
    type: "dropdown",
    label: "RESOURCES",
    items: [
      { label: "Resource Library", href: "/resources" },
      { label: "Know Your Numbers", href: "/know-the-numbers" },
      { label: "Femicide Watch", href: "/femicide-report" },
    ],
  },
  { type: "link", label: "LEGAL<br />UPDATES", href: "/legal-update" },
  { type: "link", label: "OUR<br />IMPACT", href: "/our-impact" },
  {
    type: "dropdown",
    label: "ABOUT US",
    items: [
      { label: "About", href: "/about" },
      { label: "Jugnu's Story", href: "/jugnus-story" },
      { label: "In the News", href: "/our-impact" },
    ],
  },
];

const MenuBar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => pathname === href;

  const isDropdownActive = (items: { href: string }[]) =>
    items.some((item) => pathname === item.href);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto px-4">
        <ul className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible md:justify-between text-sm font-semibold py-4 space-x-4 scrollbar-hide">
          {menuItems.map((item, index) => {
            if (item.type === "link") {
              const active = isActive(item.href);
              return (
                <li
                  key={index}
                  className="px-2 text-center whitespace-normal min-w-[120px] md:min-w-0 flex-shrink-0 md:flex-shrink"
                >
                  <Link
                    href={item.href}
                    className={`transition-colors block ${active ? "text-[#AC1514]" : "text-black hover:text-[#AC1514]"}`}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                </li>
              );
            }

            const active = isDropdownActive(item.items);
            const isOpen = openDropdown === item.label;

            return (
              <li
                key={index}
                className="relative px-2 flex items-center justify-center text-center whitespace-normal min-w-[120px] md:min-w-0 flex-shrink-0 md:flex-shrink"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`transition-colors inline-flex items-center justify-center gap-1 w-full ${active ? "text-[#AC1514]" : "text-black hover:text-[#AC1514]"}`}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="leading-tight text-center"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                  <ChevronDown
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                {isOpen && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[200px] bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50 text-left">
                    {item.items.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`block px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-50 ${isActive(sub.href) ? "text-[#AC1514] font-bold" : "text-black"}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
