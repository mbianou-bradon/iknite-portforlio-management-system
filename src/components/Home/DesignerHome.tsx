import DesignerCard from "../cards/DesignerCard"
import {members} from "../../data2"
import { ProfileType } from "../../dataTypes"
import { Link } from "react-router-dom"

let designers: ProfileType[] = []

 designers[1] = members[16]
 designers[2] = members[15]
 designers[3] = members[14]
 designers[4] = members[13]


export default function(){
    return(
        <div className="px-4 py-10 bg-[#ff4f5b] xl:min-h-screen">
            <div className="designer text-xl md:text-2xl font-semibold py-2 px-4 bg-[#ff4f5b] text-white rounded w-fit my-5">
                <h2>Senior Designers</h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 [&>*]:border-[#ff4f5b] [&>*:hover]:bg-slate-900 [&>*:hover]:text-white sm:mx-8">
                {
                    designers.map((designer) => {
                        return (
                        <DesignerCard key = {designer.id} person={designer}/>
                        )
                    })
                }
            </div>

            <div className="w-fit px-6 py-2 cursor-pointer mx-auto mt-12 shadow-sm shadow-slate-900 bg-[#ff4f5b] hover:bg-white text-white hover:text-[#ff4f5b] border border-[#ff4f5b] rounded-lg active:scale-95"><Link to="/members">View all</Link></div>
        </div>
    )
}