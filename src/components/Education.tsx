import { useParams } from "react-router-dom";
import { members } from "../data2";
import { ProfileType } from "../dataTypes";



export default function Education(){

    const memberId = Number(useParams()['memberId']);
    console.log("FROM EDUCATION: ",memberId)
    const person: ProfileType = members.filter(member =>member.id ===memberId)[0]

    const { education } = person

    return (
        <div>
            <h2 className="mt-10 mb-4 sm:mb-8 font-bold text-xl sm:text-2xl font-sans">Academic Qualification</h2>
            {
                education?.map((degree, key) => {
                    return (
                        <div key={key} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-3">
                            <div>
                                <div className="w-[90%] [&>*]:border-b">
                                    <div className="w-full py-5">
                                        <h2 className="degree__name font-semibold text-lg leading-8">{degree.degree}</h2>
                                        <h4 className="institution text-sm text-slate-400 my-3 font-semibold">{degree.institution}</h4>
                                        <p className="year text-sm text-red-500">From {degree.startDate} to {degree.endDate}</p>
                                        <div className="w-fit px-8 py-2 my-3 bg-slate-100 rounded italic text-xs"><h2>{degree.remark}</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    )
                }
                )
            }
        
        </div>
    )
}