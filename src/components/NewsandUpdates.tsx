import NewsCard from "./NewsCard"

const NewsData = [
    {
        Newstitle: "",
        description: "",
        datePublished: "",
        Newsimage: ""
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
                    NewsData.map((news) => {
                        return (
                        <NewsCard title = {news.Newstitle} datePubished = {news.datePublished} description = {news.description}/>
                        )
                    })
                }
            </div>
        </div>
    )
}