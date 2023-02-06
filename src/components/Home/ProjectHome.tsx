import { projects } from "../../data2"
import ProjectComponent from "../Project"
import { Project } from "../../dataTypes"


export default function ProjectHome(){
    let subProject: Project[] = []
    subProject[0] = projects[1]
    subProject[1] = projects[6]
    subProject[2] = projects[4]
    subProject[3] = projects[5]

    return (
         <div className="flex flex-wrap min-h-max gap-5 [&>*]:w-fit my-6">
          {
            subProject.map((subProject) => {
              return (<ProjectComponent key = {subProject.id} project={subProject} />)
            })
          }
      </div>
    )
}