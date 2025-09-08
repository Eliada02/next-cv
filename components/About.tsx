import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { infoList } from '@/assets/data/infoList'
import { toolsData } from '@/assets/data/toolsData'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user image'
                className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>I’m a passionate frontend developer who loves 
                    turning ideas into interactive and visually appealing digital 
                    experiences. With a strong focus on React, Next.js, and Tailwind
                     CSS, I enjoy building responsive websites that are not only 
                     functional but also user-friendly. I’m constantly learning new 
                     technologies, improving my skills, and exploring creative ways 
                     to deliver modern solutions. For me, coding is more than just 
                     writing code—it’s 
                    about creating experiences that connect people with technology.</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 font-Ovo'>
                        {infoList.map(({icon,iconDark,title,description},index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500
                            hover:shadow-black/10 hover:shadow-lg'
                             key={index}>
                              <Image src={icon} alt={title} className='w-7 mt-3'/>
                              <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                              <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                    <ul className='flex items-center gap-3 sm:gap-5'>
                      {toolsData.map((tool, index) => (
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:scale-110 duration-300'
                        key={index}>
                          <Image src={tool} alt='tool' className='w-5 sm:w-7 inline-block m-2'/>
                        </li>


                      ))}

                    </ul>

            </div>
        </div>
    </div>
  )
}

export default About