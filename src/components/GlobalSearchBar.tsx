"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const searchData = [
    { title: "Home", path: "/", keywords: "home main landing start" },
    { title: "About Us", path: "/about", keywords: "about company team history mission vision" },
    { title: "Consultancy", path: "/consultancy", keywords: "consult service advice business" },
    { title: "Contact Us", path: "/contact", keywords: "contact email phone address support" },
    { title: "Corporate", path: "/Corporate", keywords: "corporate business partnership b2b" },
    { title: "Family Violence Resources", path: "/familyviolence", keywords: "family violence domestic abuse help support" },
    { title: "Femicide Report", path: "/femicide-report", keywords: "femicide report data statistics women safety" },
    { title: "Get Help", path: "/gethelp", keywords: "get help support assistance emergency" },
    { title: "Get Involved", path: "/getinvolved", keywords: "get involved participate join volunteer" },
    { title: "Know The Numbers", path: "/know-the-numbers", keywords: "statistics data numbers facts figures" },
    { title: "Legal Updates", path: "/legal-update", keywords: "legal law update news rights court" },
    { title: "Podcast", path: "/podcast", keywords: "podcast audio listen episodes khauf se aagay" },
    { title: "Policy", path: "/policy", keywords: "policy rules regulations advocacy law" },
    { title: "Reads", path: "/reads", keywords: "reads articles blog stories content" },
    { title: "Resources", path: "/resources", keywords: "resources tools downloads guides help" },
    { title: "Social Impact", path: "/Social", keywords: "social impact community change" },
    { title: "Survivor Stories", path: "/survivor-stories", keywords: "survivor stories real life testimonials" },
    { title: "Testimonials", path: "/testimonials", keywords: "testimonials reviews feedback stories" },
    { title: "Training", path: "/training", keywords: "training education learn courses workshops" },
    { title: "Volunteer", path: "/volunteer", keywords: "volunteer help work join donate time" },
];

const GlobalSearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<typeof searchData>([]);
    const router = useRouter();
    const pathname = usePathname();

    const isSocialPage = pathname?.includes("/Social");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (results.length > 0) {
            router.push(results[0].path);
            setQuery("");
            setResults([]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim()) {
            const filtered = searchData.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase()) ||
                item.keywords.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    const handleSelect = () => {
        setQuery("");
        setResults([]);
    };

    return (
        <div className={`${isSocialPage ? "bg-black" : "bg-white"} py-4 relative z-50`}>
            <div className="px-8 max-w-7xl mx-auto">
                <form onSubmit={handleSearch} className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className={`h-5 w-5 ${isSocialPage ? "text-gray-300" : "text-gray-500"}`} />
                    </div>
                    <input
                        type="text"
                        className={`block w-full pl-10 pr-3 py-2 border rounded-md leading-5 focus:outline-none focus:ring sm:text-sm transition duration-150 ease-in-out
                            ${isSocialPage
                                ? "bg-black border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-700"
                                : "bg-white border-gray-300 text-black placeholder-gray-500 focus:placeholder-gray-400 focus:border-blue-300 focus:ring-blue-200"
                            }
                        `}
                        placeholder="Search across pages..."
                        value={query}
                        onChange={handleInputChange}
                    />
                    {/* Search Results Dropdown */}
                    {query && (
                        <div className={`absolute top-full left-0 w-full border rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto z-50
                            ${isSocialPage ? "bg-black border-gray-700" : "bg-white border-gray-200"}
                        `}>
                            {results.length > 0 ? (
                                <ul>
                                    {results.map((result, index) => (
                                        <li key={index} className={`border-b last:border-0 ${isSocialPage ? "border-gray-800" : "border-gray-100"}`}>
                                            <Link
                                                href={result.path}
                                                onClick={handleSelect}
                                                className={`block px-4 py-2 transition-colors duration-150
                                                    ${isSocialPage ? "hover:bg-gray-900" : "hover:bg-gray-50"}
                                                `}
                                            >
                                                <div className={`font-medium ${isSocialPage ? "text-white" : "text-gray-900"}`}>{result.title}</div>
                                                <div className={`text-xs truncate ${isSocialPage ? "text-gray-400" : "text-gray-500"}`}>{result.keywords}</div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className={`px-4 py-2 text-sm ${isSocialPage ? "text-gray-400" : "text-gray-500"}`}>No results found</div>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default GlobalSearchBar;
