"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal';

const Hero: React.FC = () => {

    const [typeEffect] = useTypewriter({
        words: ['FRONT END WEB DEVELOPER'],
        delaySpeed: 3000,
        loop: true,
        deleteSpeed: 50,

    })
    return (
        <>
            <div className=' text-baseGray md:h-[100vh] h-[50vh] flex items-center justify-center relative herobackground' id='home'>
                <div className='text-center '>
                    <h1 className='md:text-[4.5vw] text-[7vw] font-bold text-baseColor'>ANKIT SINGH</h1>
                    <Fade>
                        <p className='md:text-[3.5vw] text-[6vw]  '>{typeEffect}</p>
                    </Fade>

                </div>


            </div>


        </>
    )
}

export default Hero
