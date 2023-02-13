import DesignerCard from "../cards/DesignerCard"
import {members} from "../../data2"
import { ProfileType } from "../../dataTypes"
import { Link } from "react-router-dom"

let designers: ProfileType[] = []

 designers[1] = members[16]
 designers[2] = members[15]
 designers[3] = members[14]
 designers[4] = members[13]


export default function DesignerHome(){
    return(
        <div className="px-4 my-10 py-5 flex flex-col justify-center items-center xl:min-h-[90vh] bg-secondary">
            <div className="designer text-xl place-self-start md:text-2xl font-semibold pb-2 px-4 bg-[#ff4f5b] text-white rounded w-fit my-5">
                <h2>Senior Designers</h2>
            </div>

            <div className="flex flex-wrap items-center gap-5 [&>*:hover]:bg-slate-900 [&>*:hover]:text-white sm:mx-8">
                {
                    designers.map((designer) => {
                        return (
                        <DesignerCard key = {designer.id} person={designer}/>
                        )
                    })
                }
            </div>

            <div className="underline hover:no-underline text-center mx-auto mt-10 w-fit text-white"><Link to="/members">View all</Link></div>
        </div>
    )
}