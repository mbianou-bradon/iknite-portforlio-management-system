import DesignerCard from "./DesignerCard"
import {members} from "../data2"
import { ProfileType } from "../dataTypes"

let designers: ProfileType[] = []

 designers[1] = members[16]
 designers[2] = members[15]
 designers[3] = members[14]
 designers[4] = members[13]


export default function(){
    return(
        <div className="px-4 py-10 bg-[#ff4f5b] min-h-screen">
            <div className="designer text-2xl font-semibold py-2 px-4 bg-[#ff4f5b] text-white rounded w-fit my-5">
                <h2>Senior Designers</h2>
            </div>

            <div className="flex items-center gap-3 [&>*]:border-[#ff4f5b] [&>*:hover]:bg-slate-900 [&>*:hover]:text-white mx-8">
                {
                    designers.map((designer) => {
                        return (
                        <DesignerCard person={designer}/>
                        )
                    })
                }
            </div>
        </div>
    )
}