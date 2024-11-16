"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import logo from '@/Assets/images/logo.jpg'
import Link from 'next/link';

const Header: React.FC = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scroll, setScroll] = useState(false);

    // what is this bro

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > scrollPosition) {
                setScrollingDown(!true); 
            } else {
                setScrollingDown(!false); 
            }

            setScrollPosition(currentScrollY);

            if (currentScrollY > 100) {
                setScroll(true); 
            } else {
                setScroll(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const positionStyle = scrollingDown ? { position: 'fixed' } : null;

    return (
        <div 
            className={`flex items-center justify-between px-4 z-20 md:px-14 py-2 border-b-[0.1rem] border-baseGray w-[100%] ${scroll ? 'bg-black' : ''}`}
            style={positionStyle} 
        >
            <Image
                src={logo}
                alt='Logo'
                className='h-[7vh] w-[7vh] object-contain rounded-full'
            />
            <ul className='flex md:gap-9 gap-3'>
                <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor text-[1.6vh]'>
                    <Link href="/#home">
                        HOME
                    </Link>
                </li>

                <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor text-[1.6vh]'>
                    <Link href="/#about">
                        ABOUT US
                    </Link>
                </li>
                <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor text-[1.6vh]'>
                    <Link href="/#project">
                        PROJECT
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
