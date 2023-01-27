import DesignerCard from "./DesignerCard"


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
        <div className="px-4 py-10 bg-[#ff4f5b] min-h-screen">
            <div className="designer text-2xl font-semibold py-2 px-4 bg-[#ff4f5b] text-white rounded w-fit my-5">
                <h2>Senior Designers</h2>
            </div>

            <div className="flex items-center gap-3 [&>*]:border-[#ff4f5b] [&>*:hover]:bg-slate-900 [&>*:hover]:text-white mx-8">
                {
                    HomeDesignerData.map((designer) => {
                        return (
                        <DesignerCard person={designer}/>
                        )
                    })
                }
            </div>
        </div>
    )
}