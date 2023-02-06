import { useParams } from "react-router-dom";
import { projects } from "../data2"
import { Project } from "../dataTypes";

export default function ProjectDetails(){
    const projectId = Number(useParams()['projectId']);

    const project: Project = projects.filter(project =>project.id === projectId)[0]

    let demoImages = project.demoImages;
    let contributors = project.contributors


    return(
        <div className="px-4 sm:px-10 mt-10">
            <div>
               
                <div>
                    <div>
                        <h1 className="project_title text-5xl font-bold mb-10 w-4/6 leading-[3.5rem]">{project.title}</h1>
                        <p className="project_description md:w-4/5">{project.desc}</p>
                    </div>
                    
                    {
                    <div className="flex flex-wrap gap-5 my-10">
                        {
                            demoImages.map(projectImage =>{
                                return(
                                    <div className="w-full md:w-[20rem] h-[10rem] md:h-[20rem] bg-rose-500 border-rose-500 p-0.5 rounded hover:scale-110">
                                        <img src={projectImage} alt="" className="h-full object-cover object-center w-full"/>
                                    </div>
                                )
                            })

                        }
                        
                    </div>

                    }

                    <div className="project_contributors my-10">
                        <h2 className="mb-5 text-3xl font-bold">Contributors</h2>
                        <div className="flex px-10 [&>*]:last:-m-5 [&>*:hover]:z-20 [&>*:hover]:bg-slate-900 [&>*:hover]:scale-110 [&>*]:cursor-pointer">
                            {
                                contributors.map(contributor => {
                                    return (
                                        <div className="rounded-full w-14 h-14 md:w-20 md:h-20 bg-violet-700">
                                            {/* <img src={contributor} alt="" /> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}