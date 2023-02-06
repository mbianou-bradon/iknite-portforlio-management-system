import sample from "../assets/sample.jpeg"
import { Project } from "../dataTypes"

export default function ProjectComponent(props : { project : Project}) {
  return (
    <div className="shadow  ">
        <div className="w-full md:max-w-[18rem] bg-white hover:bg-slate-900 hover:text-white hover:shadow-sm rounded-lg border border-violet-800 overflow-hidden">
            <div>
                <div className="project__img h-[10rem]">
                    <img src={sample} alt="" className="h-full w-full object-cover object-center"/>
                </div>
                <div className="project__content px-4 py-5">
                    <div className="project__name text-xl font-semibold"><h2>Bohikor</h2></div>
                    <div className="project__description text-sm py-4 w-[90%]">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, accusantium!
                        </p>
                    </div>

                    <div className="text-white bg-violet-800 px-4 py-2 hover:text-violet-800 hover:bg-white rounded-lg w-fit border border-violet-800 cursor-pointer active:scale-95"><h2>Details</h2></div>
                </div>
            </div>
        </div>
    
    </div>
  )
}
