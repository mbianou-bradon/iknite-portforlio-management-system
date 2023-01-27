import {AiFillStar} from "react-icons/ai"
import { Profile } from "../dataTypes"

export default function Engineer(props:{ person: Profile}){

    return(
            <div className="w-full max-w-[18rem] border border-violet-600 bg-white rounded-lg py-5">
                <div>
                    <div className="w-20 h-20 rounded-full mx-4 p-0.5 bg-violet-600">
                        <img src={props.person.picture} alt="" className="object-cover object-center"/>
                    </div>
                    <div className="content py-3 px-4">
                        <div className="rating flex gap-0.5 text-yellow-400">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        <div className="body">
                            <h2 className="engineer__name text-xl font-semibold mt-2 mb-1">{props.person.name}</h2>
                            <h2 className="engineer__position text-[0.8rem] text-slate-500 mb-2">{props.person.position}</h2>
                            <h2 className="engineer__description text-xs w-[90%]">{props.person.description}</h2>
                        </div>
                    </div>
                    <div className="view_more w-fit mx-4 px-5 py-1.5 text-sm border border-violet-600 cursor-pointer bg-violet-600 text-white hover:text-violet-600 hover:bg-white active:scale-95 rounded-lg"><h2>View More</h2></div>
                </div>
            </div>
    )
}