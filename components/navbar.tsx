import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  // state to control mobile menu
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='blur' className='w-full ' />
      </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' />
        </a>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><a className='font-Ovo' href='#top'>Home</a></li>
          <li><a className='font-Ovo' href='#about'>About me</a></li>
          <li><a className='font-Ovo' href='#services'>Services</a></li>
          <li><a className='font-Ovo' href='#work'>My Work</a></li>
          <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
        </ul>

        {/* Right side buttons */}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='' className='w-6 ' />
          </button>

          <a
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} className='w-3' alt='' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6 ' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 gap-4 py-20 px-10
          ${isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"}`}
        >
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#work'>My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
