import {AiFillStar} from "react-icons/ai"
import { Link } from "react-router-dom"
import { ProfileType } from "../../dataTypes"

export default function Designer(props:{ person: ProfileType}){

    return(
            <div className="w-full sm:max-w-[18rem] border border-[#ff605b] bg-white rounded-lg py-5">
                <div>
                    <div className="w-20 h-20 rounded-full mx-4 p-0.5 bg-[#ff605b]">
                        <img src={props.person.profileImage} alt="" className="rounded-full object-cover object-center"/>
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
                            <h2 className="designer__name text-xl font-semibold mt-2 mb-1">{props.person.name}</h2>
                            <h2 className="designer__position text-[0.8rem] text-slate-500 mb-2">{props.person.dept}</h2>
                            <h2 className="designer__description text-xs w-[90%]">{props.person.bio}</h2>
                        </div>
                    </div>
                    <div className="view_more w-fit mx-4 px-5 py-1.5 text-sm border border-[#ff605b] cursor-pointer bg-[#ff605b] text-white hover:text-[#ff605b] hover:bg-white active:scale-95 rounded-lg">
                        <Link to={`/members/${props.person.id}`}>View More</Link>
                    </div>
                </div>
            </div>
    )
}