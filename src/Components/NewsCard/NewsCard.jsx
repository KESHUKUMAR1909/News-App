import "./NewsCard.css"
function NewsCard({url , urlToImage , title , description}){
    return(
        <div className="news-card">   
            <div className="image">
                <img src={urlToImage}/>
            </div>
            <div className="details">
                <p className="title">{title}</p>
                <p>{description}</p>
            </div>
            <button><a href={url} target="_blank">Explore More</a></button>

        </div>
    )

};
export default NewsCard;