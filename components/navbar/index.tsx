'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserCircle } from "phosphor-react";
import { List } from "phosphor-react";

const links = [
    {href: '#home', label: 'Home' },
    {href: '#about', label: 'About me' },
    {href: '#experience', label: 'Experience' },
    {href: '#stack', label: 'Stack' },
    {href: '#projects', label: 'Projects' },
    {href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 transition-all duration-300 border-b border-blue-900
        ${scrolled ? "bg-[rgba(30, 30, 30, 0.85)] backdrop-blur-md" : "bg-transparent backdrop-blur-none"}
      `}>
            <div className="flex flex-wrap items-center justify-between max-w-6xl md:w-10/12 mx-auto">
                <Link href="/" className="flex py-5 gap-4 items-center">
                    <span className="font-imbue sm:text-2xl sm:ml-0 ml-5 text-gray-300 text-3xl font-bold">rv<span className="text-blue-900">.</span></span>
                </Link>
                <nav className="flex justify-end" >
                    <div className="hidden w-full md:flex justify-end items-center gap-10">
                        {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="text-gray-300 text-md font-medium hover:underline">{link.label}</span>
                        </Link>
                        )}
                    </div>
                    <div className="md:hidden">
                        <div className="flex gap-4">
                            <List 
                                onClick={toggleNav}
                                className="w-12 h-12 text-gray-300 cursor-pointer"
                            />
                        </div>
                    </div>
                </nav>
                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="text-gray-300 text-md font-medium hover:underline">{link.label}</span>
                        </Link>
                        )}
                    </div>
                )} 
            </div>
        </header>
    )
}