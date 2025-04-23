"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import logo from '@/Assets/images/logo.jpg'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import img from "../../Assets/images/updatedCV.jpg"
import WelcomeIntro from './WelcomeIntro';

const Header: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showImage, setShowImage] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollPosition(currentScrollY); // Only keep scroll position tracking
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);


    // Smooth scroll to a position
    const smoothScrollTo = (targetPosition: number) => {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    };



    const link = [
        {
            name: "HOME",
            href: "#home"
        },
        {
            name: "ABOUT US",
            href: "#about"
        },
        {
            name: "PROJECT",
            href: "#project"
        },
        {
            name: "SKILLS",
            href: "#skills"
        }
    ]






    const sendMessage = () => {
        const phoneNumber = "917251979740";
        const message = encodeURIComponent("Hello Ankit...");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    /// --- instagram Condition --- ///

    const sendMessageToInstagram = () => {
        const url = `https://www.instagram.com/ankit___negi__07/`;
        window.open(url, "_blank");
    };

    /// --- instagram Condition --- ///

    const sendMessageToLinkedin = () => {
        const url = `https://www.linkedin.com/in/ankit-singh-46a7062a6/`;
        window.open(url, "_blank");
    };

    return (
        <>
            <WelcomeIntro />
            <div
                className={`flex items-center justify-between px-4 z-20 md:px-14 py-2 border-b-[0.1rem] border-baseGray w-[100%]`}
            >
                <Image
                    src={logo}
                    alt='Logo'
                    className='h-[7vh] w-[7vh] object-contain rounded-full'
                />
                <ul className='flex md:gap-9 gap-3'>
                    {
                        link.map((item, index) => (
                            <li className='cursor-pointer md:text-[1.2vw] hover:text-baseColor text-[1.6vh]' key={index}>
                                <Link
                                    href={item.href}
                                    scroll={false} // Prevent default anchor scrolling behavior
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.querySelector(item.href);
                                        if (target && target instanceof HTMLElement) {
                                            smoothScrollTo(target.offsetTop); // Smooth scroll to the section
                                        }
                                    }}

                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex gap-2 items-center'>
                    <span
                        className='cursor-pointer md:text-[2vw] hover:text-[#2ed82e] text-[1.6vh] text-baseWhite'
                        onClick={sendMessage}
                    >
                        <FaWhatsapp />
                    </span>
                    <span
                        className='cursor-pointer md:text-[2vw] hover:text-[#FF00B3] text-[1.6vh] text-baseWhite '
                        onClick={sendMessageToInstagram}
                    >
                        <FaInstagram />
                    </span>
                    <span
                        className='cursor-pointer md:text-[2vw] hover:text-[#0075B2] text-[1.6vh] text-baseWhite '
                        onClick={sendMessageToLinkedin}
                    >
                        <CiLinkedin />
                    </span>
                    <button
                        className='md:text-[1.2vw] hover:text-baseBlack text-[1.6vh] overflow-hidden group border border-baseColor  text-baseWhite py-1 px-6 rounded-md button relative ml-6'
                        onClick={() => setShowImage(true)}
                    >

                        <span
                            className='h-[100%] rounded-md  w-[100%] absolute top-[100%] left-[100%] bg-baseColor group-hover:top-0 transition-all duration-300 group-hover:left-0 z-[-1]'>
                        </span  >
                        View CV
                    </button>
                </div>
            </div>

            {
                showImage ? (
                    <div className='fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000] z-50 flex items-center justify-center'>
                        <Image src={img} alt="img" className='w-[100%] h-[95%] object-contain' />

                        <span
                            className='absolute right-4 top-4 cursor-pointer text-[2.4vw] text-red-500'
                            onClick={() => setShowImage(false)}>
                            X
                        </span>
                    </div>
                ) : null
            }

        </>
    );
}

export default Header;
