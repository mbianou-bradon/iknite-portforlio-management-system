import React from 'react'
import Engineer from '../components/Engineer'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProjectComponent from '../components/Project'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ProjectComponent/>
        <Engineer/>
        <Engineer/>
        <Footer/>
    </div>
  )
}
