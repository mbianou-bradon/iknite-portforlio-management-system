import {MdSummarize} from "react-icons/md"
import { NavLink } from "react-router-dom"
import Contact from "./Contact"
import Education from "./Education"
import ProjectAndContribution from "./ProjectAndContribution"

export default function Profile(){
     return(
        <div className="w-full xl:min-h-screen lg:mb-20">
               <div className="w-[95%] md:w-[80%] mx-auto">
                    <div className="py-4 rounded-lg bg-purple-60">
                         <div className="w-full h-[10rem] bg-red-500 rounded relative">
                              <div className="w-40 h-40 bg-violet-800 rounded-full border border-violet-800 absolute left-[5%] -bottom-10"><img src="" alt="" /></div>
                         </div>
                         <div className="mt-14 px-6">
                              <div className="member_profile">
                                   <h2 className="member__name flex items-center text-3xl font-bold my-1">Mbianou Bradon<span className=""><MdSummarize /></span></h2>
                                   <p className="member__position text-slate-400 text-xs mb-2">Software Developer Trainee</p>
                                   <p className=" w-full md:w-[45%] text-xs sm:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum animi neque minus nesciunt aliquid culpa labore quos molestiae vel at, consectetur in quisquam.</p>
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
                              <li><NavLink to='/members/profile' className={({isActive}) => isActive? "border-y-4 border-red-500 rounded text-red-500 py-2" : "border-y-4 border-transparent text-slate-900"}>Education <span className="hidden md:inline">& Qualifications</span></NavLink></li>
                              <li><NavLink to='/members/profile/contributions' className={({isActive}) => isActive? "border-y-4 border-red-500 rounded text-red-500 py-2" : "border-y-4 border-transparent text-slate-900"}>Projects <span className="hidden md:inline">& Contribution</span></NavLink></li>
                              <li><NavLink to='/members/profile/contact' className={({isActive}) => isActive? "border-y-4 border-red-500 rounded text-red-500 py-2" : "border-y-4 border-transparent text-slate-900"}>Contact Info <span className="hidden md:inline">& Socials</span></NavLink></li>
                         </ul>

                         <div className="px-8 py-5 border rounded-xl shadow-inner">
                              <ProjectAndContribution/>
                         </div>
                    </div>
               </div>
        </div>
     )
}