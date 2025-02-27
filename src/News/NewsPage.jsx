import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import NewsCard from "../Components/NewsCard/NewsCard";
import Spinner from "../Components/Spinner/Spinner";
import "./NewsPage.css";
import Notfoundpage from "../Pages/notfound/404Notfound";

function trimTitle(title = "") {
    if (title.length <= 30) return title;
    let trimmed = title.slice(0, 30);
    return trimmed.endsWith(" ") ? trimmed.trim() + "..." : trimmed.split(" ").slice(0, -1).join(" ") + "...";
}

function NewsPage(props) {
    const [newsDetails, setNewsDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState(false);

    const getNewsDetails = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(false);
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=def1c5734116459bba1e2db5a670e703&page=${page}&pageSize=${props.size}`
            );
            if (response.data.articles.length === 0) {
                setError(true);
            }
            setNewsDetails(response.data.articles);
            setTotalResults(response.data.totalResults);
        } catch (error) {
            console.error("Error fetching news:", error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [props.country, props.category, props.size, page]);

    useEffect(() => {
        getNewsDetails();
    }, [props.category, props.country, page, props.size]);

    return (
        <div className="news-area">
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <Notfoundpage />
            ) : (
                <>
                    <h1>Latest {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News</h1>
                    <ul>
                        {newsDetails.map((news, index) => (
                            <NewsCard
                                key={index}
                                urlToImage={news.urlToImage}
                                url={news.url}
                                title={trimTitle(news.title || "No Title Available")}
                                description={trimTitle(news.description || "No Description Available")}
                            />
                        ))}
                    </ul>
                    <div className="btns">
                        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                            Previous
                        </button>
                        <button disabled={page >= Math.ceil(totalResults / props.size)} onClick={() => setPage(page + 1)}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default NewsPage;
