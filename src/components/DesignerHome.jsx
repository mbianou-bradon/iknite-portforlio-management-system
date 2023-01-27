import HomeCard from "../components/HomeCard"

const HomeDesignerData = [
    {
        name: "Bill-Elton",
        position: "Lead UI/UX Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    },
    {
        name: "Bill-Elton",
        position: "Lead UI/UX Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    },
    {
        name: "Bill-Elton",
        position: "Lead UI/UX Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    },
    {
        name: "Bill-Elton",
        position: "Lead UI/UX Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum!",
        rating: ""
    }
]

export default function(){
    return(
        <div className="px-4 py-10 bg-violet-800">
            <div className="designer text-2xl font-semibold py-2 px-4 bg-orange-400 text-white rounded w-fit my-5">
                <h2>Senior Designers</h2>
            </div>

            <div className="flex items-center gap-3 [&>*]:border-orange-600 [&>*:hover]:bg-orange-400 [&>*:hover]:text-white mx-8">
                {
                    HomeDesignerData.map((designer) => {
                        return (
                        <HomeCard name = {designer.name} position = {designer.position} description = {designer.description}/>
                        )
                    })
                }
            </div>
        </div>
    )
}