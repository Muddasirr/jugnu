import React from "react";

const MenuBar = () => {
    const menuItems = [
        "UNDERSTANDING<br />FAMILY VIOLENCE",
        "WORKING IN<br />FAMILY VIOLENCE",
        "OUR<br />IMPACT",
        "TRAINING &<br />DEVELOPMENT",
        "CONSULTANCY<br />SERVICES",
        "POLICY &<br />ADVOCACY",
        "RESOURCE<br />LIBRARY",
        "LEGAL<br />UPDATES",
        "UPCOMING<br />EVENTS",
        "JOIN OUR<br />COMMUNITY",
      ];
      

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-between text-sm font-medium text-gray-800 py-4 space-x-4">
          {menuItems.map((item, index) => (
            <li key={index} className="px-2 text-center whitespace-normal">
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                dangerouslySetInnerHTML={{ __html: item }}
              ></a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
