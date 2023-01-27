import {MdSummarize} from "react-icons/md"
import Education from "./Education"

export default function Profile(){
     return(
        <div className="w-full">
               <div className="w-[95%] md:w-[80%] mx-auto">
                    <div className="py-4 rounded-lg bg-purple-60">
                         <div className="w-full h-[10rem] bg-red-500 rounded relative">
                              <div className="w-40 h-40 bg-violet-600 rounded-full border border-violet-600 absolute left-[5%] -bottom-10"><img src="" alt="" /></div>
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
                         <ul className="px-6 my-6 flex items-center justify-between [&>*]:py-2 text-xs sm:text-sm">
                              <li className="border-y-4 border-red-500 rounded text-red-500">Education <span className="hidden md:inline">& Qualifications</span></li>
                              <li>Projects <span className="hidden md:inline">& Contribution</span></li>
                              <li>Contact Info <span className="hidden md:inline">& Socials</span></li>
                         </ul>

                         <div className="px-6">
                              <Education/>
                         </div>
                    </div>
               </div>
        </div>
     )
}