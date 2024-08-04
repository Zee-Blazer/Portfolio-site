"use client";

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

    const [isClicked, setIsClicked] = useState(false);

    const toggleNavBar = (): void => setIsClicked(!isClicked);

    const pathname = usePathname();

    const navItems = [
        { title: "Works", link: "#" },
        { title: "Blog", link: "/blog" },
        { title: "Contact", link: "#contact" }
    ];

    console.log(pathname)

    return (
        <>
            <nav className="sticky sticky_nav_bar bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="font-bold">
                                    Ganiyu Bolaji
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                { navItems.map( (item, key) => (
                                    <Link 
                                        href={ item.link } 
                                        key={key} 
                                        className={
                                            `hover:bg-black hover:text-white rounded-lg p-2 
                                            ${pathname == item.link ? "bg-black text-white px-2": ""}`
                                        }
                                    >
                                        { item.title }
                                    </Link>
                                ) ) }
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black 
                                hover:text-black focus:outline-none focus:ring-2 focus:ring-inset 
                                focus:ring-black"
                                onClick={ toggleNavBar }
                            >
                                {
                                    isClicked ? 
                                    (
                                        <svg 
                                            className='h-6 w-6 outline-none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path 
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) :
                                    (
                                        <svg 
                                            className='h-6 w-6 outline-none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path 
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d="M6 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    ) 
                                }
                            </button>
                        </div>
                    </div>
                </div>

                {
                    isClicked && (
                        <div className='bg-black md:hidden'>
                            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            { navItems.map( (item, key) => (
                                <Link 
                                    href={ item.link } 
                                    key={ key } 
                                    className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    { item.title }
                                </Link>
                            ) ) }
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}
