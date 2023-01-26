import { FaFacebookF , FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

export default function Footer(){
    return(
        <footer className="px-5 md:px-10">
            <div className="my-5 mb-8 text-ce grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 text-sm text-slate-800 [&>*>h2]:text-violet-600 [&>*>h2]:font-semibold [&>*>h2]:my-4 [&>*>h2]:text-lg [&>*>ul>li:hover]:underline [&>*>ul>li]:w-fit [&>*>ul>li]:mb-2">
                <div className="short_about">
                    <h2>SpaceIn</h2>

                    <p>We give High Quality training to make our students stand out
                        amongst other students from other University
                    </p>
                </div>

                <div className="md:justify-self-center">
                    <h2>Site Map</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Members</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>

                <div className="md:justify-self-center">
                    <h2>Partners</h2>
                    <ul>
                        <li><a href="">Mountain Hub</a></li>
                        <li><a href="">Iknite Studio</a></li>
                        <li><a href="">Mocu</a></li>
                        <li><a href="">Digital Rental</a></li>
                    </ul>
                </div>

                <div>
                    <h2>Others</h2>
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Sign Up</a></li>
                        <li><a href="">Sign In</a></li>
                        <div className="flex items-center sm:justify-cente my-5  gap-5 [&>*]:w-fit [&>*]:cursor-pointer [&>*]:bg-violet-600 [&>*]:text-white [&>*:hover]:bg-white [&>*:hover]:text-violet-600 [&>*]:border [&>*]:border-violet-600 [&>*]:rounded-lg [&>*]:px-2 [&>*]:py-1">
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

            <div className="text-xs text-center [&>*>span]:text-violet-600 [&>*>span]:cursor-pointer [&>*>span:hover]:underline [&>*]:my-3">
                <p>Our <span>Terms and Conditions</span> and <span>Private Policy</span></p>
                <p className="text-slate-400">Copyright &copy; 2023, SpaceIn.org</p>
            </div>
        </footer>
    )
}