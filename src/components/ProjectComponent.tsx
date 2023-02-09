import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { Project } from "../dataTypes"
import { projects } from "../data2"

export default function ProjectComponent(props : { project : Project}) {
    let desc = props.project.desc;
    let title = props.project.title
    let company = props.project.company
    if (desc.length > 20) {
        desc = desc.slice(0,40) + "..."
    }

    if (title.length > 16){
        title = title.slice(0,18) + "..."
    }

  const  projectImages = props.project.demoImages

  let profile = projectImages[0]
  let status = props.project.status

  let color = `bg-green-500`

  if (status === 'Active'){
  
       color = `bg-yellow-600`

  }


  return (
    
    <div className="shadow  ">
        <div className="w-full md:max-w-[18rem] bg-white hover:bg-slate-900 hover:text-white hover:shadow-sm rounded-lg border border-primary overflow-hidden">
            <div className="relative">
                <div className="project__img h-[10rem] relative">
                    <img src={profile} alt="" className="h-full w-full object-cover object-center"/>
                    <div className={`absolute bottom-3 left-2 ${color} px-3 py-1 text-white text-xs rounded-full`}>{props.project.status}</div>
                    
                </div>
                <div className="project__content px-4 py-5">
                    <div className="project__name text-xl font-semibold"><h2>{ title }</h2></div>
                    <div className="project__description text-sm py-4 w-[90%]">
                        <p>
                            { desc }
                        </p>
                    </div>

                    <div className="text-white bg-primary px-4 py-2 hover:text-primary hover:bg-white rounded-lg w-fit border border-primary cursor-pointer active:scale-95"><Link to={ `/projects/${props.project.id}` }>Details</Link></div>
                    <div className="flex absolute bottom-4 right-4">
                       <div className="px-2 py-1 text-primary text-[0.5rem] shadow-sm shadow-slate-900 flex items-center justify-center">{ company }</div>
                       
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}


//   <div className="w-full md:max-w-[18rem] bg-white hover:bg-slate-900 hover:text-white hover:shadow-sm rounded-lg border border-violet-800 overflow-hidden">
//             <div>
//                 <div className="project__img h-[10rem]">
//                     <img src={sample} alt="" className="h-full w-full object-cover object-center"/>
//                 </div>
//                 <div className="project__content px-4 py-5">
//                     <div className="project__name text-xl font-semibold"><h2>Bohikor</h2></div>
//                     <div className="project__description text-sm py-4 w-[90%]">
//                         <p>
//                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, accusantium!
//                         </p>
//                     </div>

//                     <div className="text-white bg-violet-800 px-4 py-2 hover:text-violet-800 hover:bg-white rounded-lg w-fit border border-violet-800 cursor-pointer active:scale-95"><h2>Details</h2></div>
//                 </div>
//             </div>
//         </div>