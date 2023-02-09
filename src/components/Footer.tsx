import { FaFacebookF , FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="px-5 md:px-10">
            <div className="my-5 mb-8 text-ce grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 text-sm text-slate-800 [&>*>h2]:text-primary [&>*>h2]:font-semibold [&>*>h2]:my-4 [&>*>h2]:text-lg [&>*>ul>li:hover]:underline [&>*>ul>li]:w-fit [&>*>ul>li]:mb-2">
                <div className="short_about">
                    <h2>SpaceIn</h2>

                    <p className="leading-7">
                        SpaceIn is the LinkedIn of Iknite Space. 
                        Here, you get know more about the Talents and Projects of Iknite Space
                    </p>
                </div>

                <div className="md:justify-self-center">
                    <h2>Site Map</h2>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/members">Members</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                    </ul>
                </div>

                <div className="md:justify-self-center">
                    <h2>Partners</h2>
                    <ul>
                        <li><NavLink to="">Mountain Hub</NavLink></li>
                        <li><NavLink to="">Iknite Studio</NavLink></li>
                        <li><NavLink to="">Mocu</NavLink></li>
                        <li><NavLink to="">Digital Rental</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h2>Others</h2>
                    <ul>
                        <li><NavLink to="">Blog</NavLink></li>
                        <li><NavLink to="">Contact Us</NavLink></li>
                        <li><NavLink to="">Sign Up</NavLink></li>
                        <li><NavLink to="">Sign In</NavLink></li>
                        <div className="flex items-center sm:justify-cente my-5  gap-5 [&>*]:w-fit [&>*]:cursor-pointer [&>*]:bg-primary [&>*]:text-white [&>*:hover]:bg-white [&>*:hover]:text-primary [&>*]:border [&>*]:border-primary [&>*]:rounded-lg [&>*]:px-2 [&>*]:py-1">
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
                    </ul>
                </div>
            </div>

            <div className="text-xs text-center [&>*>span]:text-primary [&>*>span]:cursor-pointer [&>*>span:hover]:underline [&>*]:my-3">
                <p>Our <span>Terms and Conditions</span> and <span>Private Policy</span></p>
                <p className="text-slate-400">Copyright &copy; 2023, SpaceIn.org</p>
            </div>
        </footer>
    )
}