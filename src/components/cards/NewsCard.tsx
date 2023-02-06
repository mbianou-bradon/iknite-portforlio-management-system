import {News} from "../../dataTypes"

export default function NewsCard (prop:{ news: News }){
    return (
        <div>
            <div>
                <div className="news__img"><img src="" alt="" /></div>

                <div className="newscontent">
                    <div className="news__title">{prop.news.newsTitle}</div>
                    <div className="description">{prop.news.description}</div>
                    <div className="datepublished">{prop.news.datePublished}</div>
                </div>
            </div>
        </div>
    )
}