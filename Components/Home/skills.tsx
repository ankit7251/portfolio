"use client"
import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from "react-icons/bi";
import { LuLoaderPinwheel } from "react-icons/lu";



const Skills: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrollTop(scrollTop);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollTop / docHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  console.log("set page page height: ", scrollTop);

  const mySkills = [
    {
      name: "HTML",
      percentage: 90
    },
    {
      name: "CSS",
      percentage: 83
    },
    {
      name: "JavaScript",
      percentage: 75
    },
    {
      name: "React.js",
      percentage: 83
    },
    {
      name: "Redux",
      percentage: 69
    },
    {
      name: "RESTful API",
      percentage: 86
    },
    {
      name: "Tailwind CSS",
      percentage: 87
    },
    {
      name: "Next.js",
      percentage: 65
    }
  ]



  return (
    <>
      <div className='h-[100vh] w-[full]  text-center mt-10 border-t-[1px] border-baseGray  backgroundImageSkills ' id='skills'>
        <div className='z-20'>
          <h1 className='md:text-[3vw] font-bold text-center text-baseColor  overflow-hidden text-[7vw] mt-5 z-10'>Tools & Technologies I Use</h1>
          <p className='w-[70%] mx-[auto] mt-5 z-10'>In my development journey, I work with a wide range of modern tools and technologies to create responsive, user-friendly, and high-performance websites and applications. Below are some of the key technologies that help me bring your ideas to life.</p>
        </div>

        <div className='w-[90%] mx-[auto] h-[auto] grid grid-cols-2  mt-9 gap-[3rem]   z-10'>

          {
            mySkills.map((skills, i) => (
              <div className='w-[100%] h-[auto]  z-10' key={i}>
                <div className='flex justify-between relative'>
                  <p className='font-bold text-[1.3vw]'>{skills.name}</p>
                  {/* <p className='absolute left-[70%] font-bold text-[1.3vw]'>{skills.percentage}</p> */}
                  <p className={`absolute font-bold text-[1.3vw]`} style={{ left: `${skills.percentage - 2}%` }}>{skills.percentage}%</p>

                </div>
                <div className='bg-[#272626] h-[2vh] mt-5% w-[full] rounded-full mt-2'>
                  <div className="bg-[#40E0D0] h-[2vh] rounded-full " style={{ width: `${skills.percentage}%` }} ></div>

                </div>
              </div>
            ))
          }


        </div>
      </div>

      {
        scrollPercentage >= 5 ? (
          <>
            <div className=" bg-gray-200">
              <div
                className="fixed bottom-10 z-40 right-10 w-[8vh] h-[8vh] cursor-pointer rounded-full flex items-center justify-center bg-white transition-all duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className='text-3xl md:text-[2.8vw] text-baseBlack z-10'> <BiArrowToTop /></span>
                <span className='absolute text-3xl md:text-[4vw] text-[#40e0d056] z-0 animate-spin'><LuLoaderPinwheel /></span>
              </div>
            </div >
          </>

        ) : null
      }


    </>
  )
}

export default Skills
