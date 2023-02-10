import { Link } from 'react-router-dom'
import home from '../../assets/Home.jpg'

export default function Hero () {
    return (
        <header className='grid grid-cols-1 lg:grid-cols-2 min-h-max [&>*]:place-self-center [&>*]: gap-y-14 px-8 py-10 md:px-16 lg:min-h-[85vh] mb-5'>
            <div>
                <div className=''>
                    <h2 className='text-3xl md:text-5xl font-bold mb-5'>Welcome on <span className="text-secondary">IkniteSpace</span>In</h2>
                    <p className="w-4/5 text-sm md:text-[1rem] leading-7">IkniteSpaceIn is a platform where you get to know more about 
                    the Talents and Projects of Iknite Space.
                    </p>
                </div>

                <div className="mt-7 md:mt-10 bg-secondary text-white hover:bg-white hover:text-primary border border-secondary rounded-lg w-fit cursor-pointer font-semibold px-5 py-1.5 " >
                    <Link to="/members">Hire an Expert</Link>
                </div>
            </div>

            <div className='h-full flex items-center justify-center order-first lg:order-last'>
                <img src={home} alt="" className='h-ful aspect-video object-cover'/>
            </div>
        </header>
    )
}