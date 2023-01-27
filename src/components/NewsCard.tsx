import {props} from "../dataTypes"

export default function NewsCard (props: props){
    return (
        <div>
            <div>
                <div className="news__img"><img src="" alt="" /></div>

                <div className="newscontent">
                    <div className="news__title">{props.News.NewsTitle}</div>
                    <div className="description">{props.News.description}</div>
                    <div className="datepublished">{props.News.DatePublished}</div>
                </div>
            </div>
        </div>
    )
}