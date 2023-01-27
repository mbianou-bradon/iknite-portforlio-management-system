
import NewsCard from "./NewsCard"

const  newsData: { 
    newsTitle: string, 
    description: string, 
    datePublished: string, 
    newsImage: string 
}[] = [
    {
        newsTitle: "Kimboh Lovette",
        description: "lorem",
        datePublished: "Jan 27, 2023",
        newsImage: ""
    },
    {
        newsTitle: "Kimboh Lovette",
        description: "lorem",
        datePublished: "Jan 27, 2023",
        newsImage: ""
    },
    {
        newsTitle: "Kimboh Lovette",
        description: "lorem",
        datePublished: "Jan 27, 2023",
        newsImage: ""
    }
]


export default function NewsandUpdate (){
    return(
        <div className="px-4 py-10 bg-violet-800">
            <div className="designer text-2xl font-semibold py-2 px-4 bg-orange-400 text-white rounded w-fit my-5">
                <h2>Senior Designers</h2>
            </div>

            <div className="flex items-center gap-3 [&>*]:border-orange-600 [&>*:hover]:bg-orange-400 [&>*:hover]:text-white mx-8">
                {
                    newsData.map((newNews) => {
                        return (
                        <NewsCard news = {newNews}/>
                        )
                    })
                }
            </div>
        </div>
    )
}