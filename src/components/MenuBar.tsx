import React from "react";
import Link from "next/link";

const MenuBar = () => {
  const menuItems = [
    { label: "UNDERSTANDING<br />FAMILY VIOLENCE", href: "/familyviolence" },
    { label: "WORKING IN<br />FAMILY VIOLENCE", href: "/familyviolence" },
    { label: "TRAINING &<br />DEVELOPMENT", href: "/training" },
    { label: "CONSULTANCY<br />SERVICES", href: "/consultancy" },
    { label: "POLICY &<br />ADVOCACY", href: "/policy" },
    { label: "RESOURCE<br />LIBRARY", href: "/resources" },
    { label: "LEGAL<br />UPDATES", href: "/legal-update" },
    { label: "OUR<br />IMPACT", href: "/know-the-numbers" },
  ];


  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto px-4">
        <ul className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible md:justify-between text-sm font-medium text-black py-4 space-x-4 scrollbar-hide">
          {menuItems.map((item, index) => (
            <li key={index} className="px-2 text-center whitespace-normal min-w-[120px] md:min-w-0 flex-shrink-0 md:flex-shrink">
              <Link
                href={item.href}
                className="hover:text-[#AC1514] transition-colors block"
                dangerouslySetInnerHTML={{ __html: item.label }}
              ></Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;

