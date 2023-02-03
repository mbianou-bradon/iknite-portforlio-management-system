import {MdEmail, MdSummarize} from "react-icons/md"
import {RiUserLocationFill} from "react-icons/ri"
import {BsPhoneFill} from "react-icons/bs"
import { FaFacebookF , FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { NavLink, Outlet, useParams } from "react-router-dom"
import { ProfileType } from "../dataTypes"
import { members } from "../data2"


export default function Profile(){
    const memberId = Number(useParams()['memberId']);

    const person: ProfileType = members.filter(member =>member.id ===memberId)[0]
    console.log("From profile:",person)

    return(
        <div className="w-full xl:min-h-screen lg:mb-20">
               <div className="w-[95%] md:w-[80%] mx-auto">
                    <div className="py-4 rounded-lg bg-purple-60">
                         <div className="w-full h-[10rem] bg-red-500 rounded relative">
                                <img src={person.coverImage} alt="" className="w-full h-full rounded aspect-video object-cover object-center"/>
                              <div className="w-40 h-40 bg-violet-800 rounded-full border border-violet-800 absolute left-[5%] -bottom-10"><img src={person.profileImage} alt="" className="rounded-full object-center object-cover"/></div>
                         </div>
                         <div className="mt-14 px-6">
                              <div className="member_profile">
                                   <h2 className="member__name flex items-center text-3xl font-bold my-1">{person.name}<span className="cursor-pointer"><MdSummarize /></span></h2>
                                   <p className="member__position text-slate-400 text-xs mb-2">{person.dept} {person.level}</p>
                                   <p className=" w-full md:w-[45%] text-xs sm:text-sm">{person.bio}</p>
                              </div>

                              <div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                              </div>
                         </div>
                    </div>
                    <div>
                         <ul className="px-6 my-4 flex items-center justify-between [&>*]:py-2 text-xs sm:text-sm">
                              <li><NavLink to={"/members/"+ person.id} className={({isActive}) => isActive? "border-y-4 border-red-500 rounded text-red-500 py-2" : "border-y-4 border-transparent text-slate-900"} end={true}>Education <span className="hidden md:inline">& Qualifications</span></NavLink></li>
                              <li><NavLink to={'/members/' + person.id + '/contributions'} className={({isActive}) => isActive? "border-y-4 border-red-500 rounded text-red-500 py-2" : "border-y-4 border-transparent text-slate-900"}>Projects <span className="hidden md:inline">& Contribution</span></NavLink></li>
                              <li><NavLink to={'/members/' + person.id + '/contact'} className={({isActive}) => isActive? "border-y-4 border-red-500 rounded text-red-500 py-2" : "border-y-4 border-transparent text-slate-900"}>Contact Info <span className="hidden md:inline">& Socials</span></NavLink></li>
                         </ul>

                         <div className="h-[35rem] px-8 py-5 border rounded-xl shadow-inner">
                              <Outlet />
                         </div>
                    </div>
               </div>
        </div>
     )
}


