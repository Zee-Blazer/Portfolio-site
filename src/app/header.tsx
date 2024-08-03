"use client";

import React, { useState } from 'react';

export default function Header() {

    const [isClicked, setIsClicked] = useState(false);

    const toggleNavBar = (): void => setIsClicked(!isClicked);

    const navItems = [
        { title: "Works", link: "" },
        { title: "Blog", link: "" },
        { title: "Contact", link: "" }
    ]

    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-white">Ganiyu Bolaji</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                { navItems.map( (item, key) => (
                                    <a href="#" key={key} className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                        { item.title }
                                    </a>
                                ) ) }
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white 
                                hover:text-white focus:outline-none focus:ring-2 focus:ring-inset 
                                focus:ring-white"
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
                        <div className='md:hidden'>
                            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            { navItems.map( (item, key) => (
                                <a href="#" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                                    { item.title }
                                </a>
                            ) ) }
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}
