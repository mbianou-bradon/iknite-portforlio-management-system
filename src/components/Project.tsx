import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { Project } from "../dataTypes"

export default function ProjectComponent(props : { project : Project}) {
    let desc = props.project.desc;
    let title = props.project.title
    let contributions = props.project.contributors
    if (desc.length > 10) {
        desc = desc.slice(0,60) + "..."

        console.log(desc)
    }

    if (title.length > 20){
        title = title.slice(0,21) + "..."
    }

  const  projectImages = props.project.demoImages

  let profile = projectImages[0]





  return (
    <div className="shadow  ">
        <div className="w-full md:max-w-[18rem] bg-white hover:bg-slate-900 hover:text-white hover:shadow-sm rounded-lg border border-violet-800 overflow-hidden">
            <div className="relative">
                <div className="project__img h-[10rem]">
                    <img src={profile} alt="" className="h-full w-full object-cover object-center"/>
                </div>
                <div className="project__content px-4 py-5">
                    <div className="project__name text-xl font-semibold"><h2>{ title }</h2></div>
                    <div className="project__description text-sm py-4 w-[90%]">
                        <p>
                            { desc }
                        </p>
                    </div>

                    <div className="text-white bg-violet-800 px-4 py-2 hover:text-violet-800 hover:bg-white rounded-lg w-fit border border-violet-800 cursor-pointer active:scale-95"><Link to={ `/members/${props.project.id}` }>Details</Link></div>
                    <div className="flex gap-1 absolute bottom-4 right-4">
                       <div className="rounded-full text-violet-700 border border-violet-700 w-5 h-5 flex items-center justify-center"><IoIosPerson/></div>
                       <p className="text-sm">{contributions.length}</p> 
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