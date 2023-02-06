import Hero from '../components/Home/Hero'
import EngineerHome from '../components/Home/EngineerHome'
import DesignerHome from '../components/Home/DesignerHome'
import ProjectHome from '../components/Home/ProjectHome'

export default function Home() {
  return (
    <div>

        <Hero/>
        <ProjectHome/>
        <EngineerHome/>
        <DesignerHome/>
    
    </div>
  )
}
