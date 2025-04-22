"use client"
import React from 'react'
import Image from 'next/image'
import whoIAm from "@/Assets/images/who_i_am.webp"
import mySkils from "@/Assets/images/myskils.webp"
import myapproach from "@/Assets/images/myapproach.jpg"
import fron_end from "@/Assets/images/Front-End.webp"
import continueimg from "@/Assets/images/continue.webp"
import { Fade } from 'react-awesome-reveal';

const About: React.FC = () => {
    return (
        <div className=' md:w-[full] py-4 px-4 md:px-14' id='about'>

            <h1 className='md:text-[3vw] font-bold text-center text-baseColor overflow-hidden text-[7vw]'><u><Fade>ABOUT US</Fade></u></h1>
            <div className="md:flex md:h-[50vh] md-w-[100vw] items-center md:mt-14 justify-between overflow-hidden">
                <div className='h-[100%] md:w-[48%]  rounded-3xl overflow-hidden hidden md:flex'>
                    <Image
                        src={whoIAm}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out my-6 md:my-0 '
                    />
                </div>
                <div className='h-[100%] md:w-[48%] flex flex-col  justify-center'>
                    <h2 className='md:text-[2vw] font-bold text-baseColor text-[5vw] mb-3 '><u><Fade>Who I Am</Fade></u></h2>
                    <Fade>
                        <p className='md:text-[1.3vw]'>I am a dedicated front-end developer with a passion for crafting intuitive and visually engaging web experiences. With a strong foundation in modern web technologies, I bring ideas to life on the screen, ensuring each project is not just functional but also user-friendly. My approach blends creativity with technical expertise to build websites that leave a lasting impression.</p>
                    </Fade>
                </div>

                <div className='h-[100%] md:w-[48%]  rounded-3xl overflow-hidden md:hidden flex'>
                    <Image
                        src={whoIAm}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out my-6 md:my-0   '
                    />
                </div>
            </div>

            <div className="md:flex md:h-[50vh] md-w-[100vw] items-center md:mt-14 justify-between">

                <div className='h-[100%] md:w-[48%] flex flex-col  justify-center'>
                    <h2 className='md:text-[2vw] font-bold text-baseColor  text-[5vw] mb-3 '><u><Fade>My Skills</Fade></u></h2>
                    <Fade>   <p className='md:text-[1.3vw]'>I specialize in HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS, and Redux Toolkit, which allow me to create responsive, dynamic, and scalable web applications. My expertise in these technologies ensures that I can handle everything from building sleek user interfaces to optimizing performance and managing state efficiently. Whether it&apos;s coding from scratch or enhancing existing websites, I take pride in delivering quality code and seamless experiences.</p></Fade>
                </div>
                <div className='h-[100%] md:w-[48%] flex rounded-3xl overflow-hidden '>
                    <Image
                        src={mySkils}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out my-6 md:my-0'
                    />
                </div>
            </div>


            <div className="md:flex md:h-[50vh] md-w-[100vw] items-center md:mt-14 justify-between">
                <div className='h-[100%] w-[48%]  rounded-3xl overflow-hidden hidden md:flex'>
                    <Image
                        src={myapproach}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out '
                    />
                </div>
                <div className='h-[100%] md:w-[48%] flex flex-col  justify-center '>
                    <h2 className='md:text-[2vw] font-bold text-baseColor text-[5vw] mb-3 '><u><Fade>My Approach</Fade></u></h2>
                    <Fade> <p className='md:text-[1.3vw]'>My approach to development revolves around clean, maintainable code and a user-first mindset. I start by understanding the project’s requirements and target audience before diving into the design and development process. I believe that a website should not only look good but also function smoothly across all devices. Every line of code I write is meant to ensure speed, accessibility, and responsiveness, making sure the final product exceeds expectations.</p></Fade>
                </div>
                <div className='h-[100%] md:w-[48%]  rounded-3xl overflow-hidden flex  md:hidden'>
                    <Image
                        src={myapproach}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out my-6 md:my-0'
                    />
                </div>
            </div>

            <div className="md:flex md:h-[50vh] md-w-[100vw] items-center md:mt-14 justify-between">
                <div className='h-[100%] md:w-[48%] flex flex-col  justify-center '>
                    <h2 className='md:text-[2vw] text-[5vw] font-bold text-baseColor mb-3 '><u><Fade>Why I Love Front-End Development</Fade></u></h2>
                    <Fade><p className='md:text-[1.3vw]'>Front-end development allows me to merge my love for design and coding. I enjoy taking static designs and transforming them into fully interactive web experiences that engage users. The ever-evolving nature of front-end technologies keeps me motivated to keep learning, and I embrace the challenges that come with building complex, performance-driven websites.</p></Fade>
                </div>
                <div className='h-[100%] md:w-[48%] flex rounded-3xl overflow-hidden '>
                    <Image
                        src={fron_end}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out my-6 md:my-0'
                    />
                </div>
            </div>

            <div className="md:flex md:h-[50vh] md-w-[100vw] items-center md:mt-14 justify-between">
                <div className='h-[100%] md:w-[48%]  rounded-3xl overflow-hidden hidden md:flex'>
                    <Image
                        src={continueimg}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out'
                    />
                </div>
                <div className='h-[100%] md:w-[48%] flex flex-col  justify-center'>
                    <h2 className='md:text-[2vw] text-[5vw] font-bold text-baseColor mb-3 '><u><Fade>Continuous Learning</Fade></u></h2>
                    <Fade> <p className='md:text-[1.3vw]'>In the fast-paced world of web development, staying updated is key. I am constantly learning and experimenting with new tools and frameworks to sharpen my skills and stay ahead of industry trends. From exploring new libraries to following the latest best practices, I am committed to continuous growth and delivering cutting-edge solutions.</p></Fade>
                </div>

                <div className='h-[100%] md:w-[48%]  rounded-3xl overflow-hidden flex  md:hidden my-6 '>
                    <Image
                        src={continueimg}
                        alt="who i am"
                        className='md:h-[100%] w-[100%] object-cover hover:transform hover:scale-[1.1] hover:duration-500 ease-in-out'
                    />
                </div>
            </div>

        </div>
    )
}

export default About
