import { Link } from "react-router-dom"
import { members } from "../data2"
import { ProfileType } from "../dataTypes"
import EngineerCard from "./EngineerCard"

let engineers: ProfileType[] = []

 engineers[1] = members[5]
 engineers[2] = members[6]
 engineers[3] = members[7]
 engineers[4] = members[8]

export default function(){


    return(
        <div className="px-4 my-10 py-5 items-center xl:min-h-screen">
            <div className="designer text-xl md:text-2xl font-semibold py-2 px-4 bg-violet-800 text-white w-fit rounded-sm sm:mt-8 mb-12">
                <h2>Senior Developers</h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 [&>*:hover]:bg-slate-900 [&>*:hover]:text-white sm:mx-8">
                {
                    engineers.map((engineer) => {
                        return (
                        <EngineerCard person = {engineer}/>
                        )
                    })
                }
            </div>

            <div className="w-fit px-6 py-2 cursor-pointer mx-auto mt-12 shadow-sm shadow-slate-900 hover:bg-slate-900 bg-white hover:text-white text-slate-900 border border-slate-900 rounded-lg active:scale-95"><Link to="/members">View all</Link></div>
        </div>
    )
}