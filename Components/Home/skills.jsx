import React from 'react'

const Skills = () => {

  const mySkills = [
    {
      name: "HTML",
      percentage: 85
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
    }
  ]
  return (
    <div className='h-[100vh] w-[full]  text-center mt-10 border-t-[1px] border-baseGray '>
      <h1 className='md:text-[3vw] font-bold text-center text-baseColor  overflow-hidden text-[7vw] mt-5'>Tools & Technologies I Use</h1>
      <p className='w-[70%] mx-[auto] mt-5'>In my development journey, I work with a wide range of modern tools and technologies to create responsive, user-friendly, and high-performance websites and applications. Below are some of the key technologies that help me bring your ideas to life.</p>

      <div className='w-[90%] mx-[auto] h-[auto] grid grid-cols-2  mt-9 gap-[3rem]'>

        {
          mySkills.map((skills, i) => (
            <div className='w-[100%] h-[auto] ' key={i}>
              <div className='flex justify-between relative'>
                <p className='font-bold text-[1.3vw]'>{skills.name}</p>
                {/* <p className='absolute left-[70%] font-bold text-[1.3vw]'>{skills.percentage}</p> */}
                <p className={`absolute font-bold text-[1.3vw]`} style={{ left: `${skills.percentage - 2}%` }}>{skills.percentage}%</p>

              </div>
              <div className='bg-[#272626] h-[2vh] mt-5% w-[full] rounded-full mt-2'>
                <div className="bg-[#40E0D0] h-[2vh] rounded-full "style={{ width: `${skills.percentage}%` }} ></div>

              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Skills
