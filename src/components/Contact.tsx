import { MdEmail } from "react-icons/md"
import {RiUserLocationFill} from "react-icons/ri"
import {BsPhoneFill} from "react-icons/bs"
import { FaFacebookF , FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { members } from "../data2"
import { ProfileType } from "../dataTypes"

export default function Contact(){
    
    const memberId = Number(useParams()['memberId']);

    const person: ProfileType = members.filter(member =>member.id ===memberId)[0]

    const contacts  = person.contacts
    const emails = contacts?.emails
    const phones = contacts?.phones
    const addresses = contacts?.addresses

    const social = person.mediaLinks
    const facebook = social?.facebook
    const linkedin = social?.linkedin
    const twitter = social?.twitter
    const github = social?.github
    const instagram = social?.instagram
    const tiktok = social?.tiktok

  

    console.log(emails)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="[&>*]:flex [&>*]:gap-1 [&>*]:mb-8 [&>*>div>h2]:text-lg [&>*>div>h2]:mb-2 [&>*>div>p]:text-sm [&>*>div>p]:text-slate-400 [&>*>div>p]:mb-1">
                <div className="email__contact">
                    <div className="text-3xl"><MdEmail/></div>
                    <div>
                        <h2>EMAIL ADDRESS</h2>
                            {emails &&
                            <div>
                            {
                                emails.map((email, key) =>{
                                    return (
                                    <p key={key}>{email}</p>
                                    )
                                } )
                            }
                         </div>
                        }
                            
                        
                       
                    </div>
                </div>

                <div className="phone_number__contact">
                    <div className="text-3xl"><BsPhoneFill/></div>
                    <div>
                        <h2>PHONE NUMBER</h2>
                        {phones &&
                            <div>
                            {
                                phones.map((phone, key) =>{
                                    return (
                                    <p key={key}>{phone}</p>
                                    )
                                } )
                            }
                         </div>
                        }
                    </div>
                </div>

                <div className="address__contact">
                    <div className="text-3xl"><RiUserLocationFill/></div>
                    <div>
                        <h2>ADDRESS LINES</h2>
                        {addresses &&
                            <div>
                            {
                                addresses.map((address, key) =>{
                                    return (
                                    <p key={key}>{address}</p>
                                    )
                                } )
                            }
                         </div>
                        }
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold">Social Media</h2>
                <div className="text-xl lg:text-2xl flex items-center sm:justify-cente my-5  gap-5 [&>*]:w-fit [&>*]:cursor-pointer [&>*]:bg-violet-600 [&>*]:text-white [&>*:hover]:bg-white [&>*:hover]:text-violet-600 [&>*]:border [&>*]:border-violet-600 [&>*]:rounded-lg [&>*]:px-2 [&>*]:py-1">
                    {/* LinkedIn */}

                    {
                        social?.linkedin &&
                        <div>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn/>
                            </a>
                        
                        </div>
                    }
                   
                    {/* Github */}

                    {
                        social?.github &&
                        <div>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub/>
                            </a>
                        
                        </div>
                    }
                    


                    {/* Facebook */}
                  
                    {
                        social?.facebook &&
                        <div>
                            <a href={facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                            </a>
                        
                        </div>
                    }

                    {/* Twitter */}
                    {
                        social?.twitter &&
                        <div>
                            <a href={twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>   
                        </div>
                    }
                    {/* Instagram */}
                    {
                        social?.instagram &&
                        <div>
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <AiFillInstagram />
                            </a>   
                        </div>
                    }

                     {/* Tiktok */}
                    {
                        social?.tiktok &&
                        <div>
                            <a href={tiktok} target="_blank" rel="noopener noreferrer">
                                <FaTiktok />
                            </a>   
                        </div>
                    }

                    
                </div>

                <div className="rounded-lg mt-10 px-6 py-2 border border-violet-600 hover:text-white hover:bg-violet-800 active:scale-95 cursor-pointer w-fit "><h2>Message Me</h2></div>
            </div>
        </div>
    )
}