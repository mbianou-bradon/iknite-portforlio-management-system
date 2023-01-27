import React from 'react'
import Engineer from '../components/EngineerCard'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProjectComponent from '../components/Project'
import EngineerHome from '../components/EngineerHome'
import DesignerHome from '../components/DesignerHome'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ProjectComponent/>
        <EngineerHome/>
        <DesignerHome/>
        <Footer/>
    </div>
  )
}
