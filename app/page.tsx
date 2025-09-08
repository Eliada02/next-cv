'use client'
import Navbar from '@/components/navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import { title } from 'process'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work />
    </>
  )


  
}
