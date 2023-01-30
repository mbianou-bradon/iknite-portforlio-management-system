import { MdEmail } from "react-icons/md"
import {RiUserLocationFill} from "react-icons/ri"
import {BsPhoneFill} from "react-icons/bs"
import { FaFacebookF , FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

export default function Contact(){


    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="[&>*]:flex [&>*]:gap-1 [&>*]:mb-8 [&>*>div>h2]:text-lg [&>*>div>h2]:mb-2 [&>*>div>p]:text-sm [&>*>div>p]:text-slate-400 [&>*>div>p]:mb-1">
                <div className="email__contact">
                    <div className="text-3xl"><MdEmail/></div>
                    <div>
                        <h2>EMAIL ADDRESS</h2>
                        <p>mbianoubradon@gmail.com</p>
                    </div>
                </div>

                <div className="phone_number__contact">
                    <div className="text-3xl"><BsPhoneFill/></div>
                    <div>
                        <h2>PHONE NUMBER</h2>
                        <p>+237 671 242 032</p>
                        <p>+237 695 680 989</p>
                    </div>
                </div>

                <div className="address__contact">
                    <div className="text-3xl"><RiUserLocationFill/></div>
                    <div>
                        <h2>ADDRESS LINES</h2>
                        <p>Miss Bright Street, Bomaka Buea</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold">Social Media</h2>
                <div className="text-xl lg:text-2xl flex items-center sm:justify-cente my-5  gap-5 [&>*]:w-fit [&>*]:cursor-pointer [&>*]:bg-violet-600 [&>*]:text-white [&>*:hover]:bg-white [&>*:hover]:text-violet-600 [&>*]:border [&>*]:border-violet-600 [&>*]:rounded-lg [&>*]:px-2 [&>*]:py-1">
                    {/* LinkedIn */}
                    <div>
                        <FaLinkedinIn/>
                    </div>
                                
                    {/* Facebook */}
                    <div>
                        <FaFacebookF />
                    </div>
                    {/* Twitter */}
                    <div>
                        <FaTwitter />
                    </div>
                    {/* Instagram */}
                    <div>
                        <AiFillInstagram />
                    </div>
                </div>

                <div className="rounded-lg mt-10 px-6 py-2 border border-violet-600 hover:text-white hover:bg-violet-800 active:scale-95 cursor-pointer w-fit "><h2>Message Me</h2></div>
            </div>
        </div>
    )
}