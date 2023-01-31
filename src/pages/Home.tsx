import React from 'react'
import Engineer from '../components/EngineerCard'
import Hero from '../components/Hero'
import ProjectComponent from '../components/Project'
import EngineerHome from '../components/EngineerHome'
import DesignerHome from '../components/DesignerHome'

export default function Home() {
  return (
    <div>

        <Hero/>
        <ProjectComponent/>
        <EngineerHome/>
        <DesignerHome/>
    
    </div>
  )
}
