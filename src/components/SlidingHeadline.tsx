import React from 'react';

const SlidingHeadline = () => {
    const content = (
        <>
            <span className="mx-4">IN DANGER? CALL 15 ( POLICE )</span>
            <span className="mx-4">HELPLINE: 03341122014</span>
            <span className="mx-4">THEJUGNUPROJECT@GMAIL.COM</span>
        </>
    );

    return (
        <div className="bg-[#AC1514] text-white py-3 overflow-hidden flex border-y-2 border-white/10 relative z-20">
            <div className="animate-marquee whitespace-nowrap flex flex-row items-center flex-shrink-0">
                <span className="text-sm md:text-base font-bold tracking-widest flex items-center">
                    {content}
                    {content}
                    {content}
                    {content}
                </span>
            </div>
            <div className="animate-marquee whitespace-nowrap flex flex-row items-center flex-shrink-0">
                <span className="text-sm md:text-base font-bold tracking-widest flex items-center">
                    {content}
                    {content}
                    {content}
                    {content}
                </span>
            </div>
        </div>
    );
};

export default SlidingHeadline;
