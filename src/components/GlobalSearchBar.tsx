"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const GlobalSearchBar = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", query);
        // Implement search logic here
    };

    return (
        <div className="bg-white  py-4">
            <div className=" px-8">
                <form onSubmit={handleSearch} className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-2 pr-2 border-r-2 border-black flex items-center justify-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-12  py-2 border border-black rounded-md leading-5 bg-white placeholder-gray-500 text-black  sm:text-sm"
                        placeholder="Search anything...."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default GlobalSearchBar;
