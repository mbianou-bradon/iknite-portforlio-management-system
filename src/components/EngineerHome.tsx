import EngineerCard from "./EngineerCard"

const HomeEngineerData = [
    {
        name: "Tambua Evaristus",
        position: "Lead Software Engineer",
        picture: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    },
    {
        name: "Chu Edwin",
        position: "Lead Software Engineer",
        picture: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    },
    {
        name: "Asonganyi Roulec",
        position: "Lead Software Engineer",
        picture: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    },
    {
        name: "Tambua Evaristus",
        position: "Lead Software Engineer",
        picture: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    }
]

export default function(){


    return(
        <div className="px-4 my-10 min-h-screen">
            <div className="designer text-2xl font-semibold py-2 px-4 bg-violet-600 text-white w-fit rounded-sm my-5">
                <h2>Senior Developers</h2>
            </div>

            <div className="flex items-center gap-3 [&>*:hover]:bg-slate-900 [&>*:hover]:text-white mx-8">
                {
                    HomeEngineerData.map((engineer) => {
                        return (
                        <EngineerCard person = {engineer}/>
                        )
                    })
                }
            </div>
        </div>
    )
}