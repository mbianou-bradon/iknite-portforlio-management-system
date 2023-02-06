import { projects } from "../../data2"
import ProjectComponent from "../ProjectComponent"
import { Project } from "../../dataTypes"
import { Link } from "react-router-dom"


export default function ProjectHome(){
    let subProject: Project[] = []
    subProject[0] = projects[1]
    subProject[1] = projects[3]
    subProject[2] = projects[5]
    subProject[3] = projects[4]

    return (
        <div className="px-4 py-10 bg-violet-700 xl:min-h-screen">
            <div className="designer text-xl md:text-2xl font-semibold py-2 px-4 bg-violet-800 text-white w-fit rounded-sm sm:mt-8 mb-12">
                <h2>Key Projects</h2>
            </div>

            <div className="flex flex-wrap min-h-max gap-5 [&>*]:w-fit my-6 sm:mx-8">
                {
                    subProject.map((subProject) => {
                    return (<ProjectComponent key={subProject.id} project={subProject} />)
                    })
                }
            </div>

            <div className="w-fit px-6 py-2 cursor-pointer mx-auto mt-12 shadow-sm shadow-slate-900 hover:bg-slate-900 bg-white hover:text-white text-slate-900 border border-slate-900 rounded-lg active:scale-95"><Link to="/projects">View all</Link></div>
        </div>
    )
}