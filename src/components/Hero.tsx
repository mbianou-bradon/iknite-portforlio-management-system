import home from '../assets/Home.jpg'

export default function Hero () {
    return (
        <header className='grid grid-cols-1 lg:grid-cols-2 min-h-max [&>*]:place-self-center [&>*]: gap-y-14 px-8 py-10 md:px-16 lg:min-h-screen'>
            <div>
                <div className=''>
                    <h2 className='text-3xl md:text-5xl leading-12 font-bold mb-5'>Welcome on <span className="text-violet-600">Space</span>In</h2>
                    <p className="w-4/5 text-sm md:text-[1rem] leading-7">SpaceIn is a platform where you get to know more about 
                    the Talents and Projects of Iknite Space.
                    </p>
                </div>

                <div className="mt-7 md:mt-10 bg-violet-600 text-white hover:bg-white hover:text-violet-600 border border-violet-600 rounded-lg w-fit cursor-pointer font-semibold px-5 py-1.5 " >
                    <a href="#">Hire an Expert</a>
                </div>
            </div>

            <div className='h-full flex items-center justify-center order-first lg:order-last'>
                <img src={home} alt="" className='h-ful aspect-video object-cover'/>
            </div>
        </header>
    )
}