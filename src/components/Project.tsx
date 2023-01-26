import React from 'react'
import sample from "../assets/sample.jpeg"

export default function ProjectComponent() {
  return (
    <div className="flex items-center flex-wrap min-h-screen gap-3 px-3 bg-violet-600 [&>*]:shadow-sm [&>*:hover]:shadow-lg [&>*:hover]:shadow-slate-900">
    <div className="w-full max-w-[18rem] bg-white rounded-lg border border-violet-600 overflow-hidden">
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

                <div className="text-white bg-violet-600 px-4 py-2 hover:text-violet-500 hover:bg-white rounded-lg w-fit border border-violet-600 cursor-pointer active:scale-95"><h2>Details</h2></div>
            </div>
        </div>
    </div>

    <div className="w-full max-w-[18rem] bg-white rounded-lg border border-violet-600 shadow-sm shadow-violet-600 hover:shadow-lg overflow-hidden">
        <div>
            <div className="project__img h-[10rem]">
                <img src={sample} alt="" className="h-full w-full object-cover object-cente"/>
            </div>
            <div className="project__content px-4 py-5">
                <div className="project__name text-xl font-semibold"><h2>Bohikor</h2></div>
                <div className="project__description text-sm py-4 w-[90%]">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, accusantium!
                    </p>
                </div>

                <div className="text-white bg-violet-600 px-4 py-2 hover:text-violet-500 hover:bg-white rounded-lg w-fit border border-violet-600 cursor-pointer active:scale-95"><h2>Details</h2></div>
            </div>
        </div>
    </div>

    <div className="w-full max-w-[18rem] bg-white rounded-lg border border-violet-600 shadow-sm shadow-violet-600 hover:shadow-lg overflow-hidden">
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

                <div className="text-white bg-violet-600 px-4 py-2 hover:text-violet-500 hover:bg-white rounded-lg w-fit border border-violet-600 cursor-pointer active:scale-95"><h2>Details</h2></div>
            </div>
        </div>
    </div>
    </div>
  )
}
