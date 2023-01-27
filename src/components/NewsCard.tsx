

export default function NewsCard (props){
    return (
        <div>
            <div>
                <div className="news__img"><img src="" alt="" /></div>

                <div className="newscontent">
                    <div className="news__title">{props.title}</div>
                    <div className="description">{props.description}</div>
                    <div className="datepublished">{props.datePubished}</div>
                </div>
            </div>
        </div>
    )
}