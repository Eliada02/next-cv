'use client'
import Navbar from '@/components/navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useState,useEffect } from 'react'

export default function Home() {

  const [isDarkMode,setIsDarkMode] = useState(true);

  useEffect(() => {
    if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true);

    }else{

      setIsDarkMode(false);
    }

  },[])

  console.log(isDarkMode);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light'; // Add this line
  }
}, [isDarkMode]); // Missing closing bracket was here
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>

    </>
  )


  
}
