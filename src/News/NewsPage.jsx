import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import NewsCard from "../Components/NewsCard/NewsCard";
import Spinner from "../Components/Spinner/Spinner";
import "./NewsPage.css";

function NewsPage(props) {
    const [newsDetails, setNewsDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const getNewsDetails = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=def1c5734116459bba1e2db5a670e703&page=${page}&pageSize=${props.size}`
            );
            setNewsDetails(response.data.articles);
            setTotalResults(response.data.totalResults);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setIsLoading(false);
        }
    }, [props.country, props.category, props.size, page]); 

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    const handleNextClick = () => {
        if (page < Math.ceil(totalResults / props.size)) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        getNewsDetails();
    },[props.category, props.country, page, props.size]); 

    return (
        <div className="news-area">
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <h1>Latest Tech News</h1>
                    <ul>
                        {newsDetails.map((news, index) => (
                            <NewsCard
                                key={index}
                                urlToImage={news.urlToImage}
                                url={news.url}
                                title={news.title}
                                description={news.description}
                            />
                        ))}
                    </ul>
                    <div className="btns">
                        <button
                            disabled={page <= 1}
                            onClick={handlePrevClick}
                        >
                            Previous
                        </button>
                        <button
                            disabled={page >= Math.ceil(totalResults / props.size)}
                            onClick={handleNextClick}
                        >
                            Next
                        </button>

                    </div>
                </>
            )}
        </div>
    );
}

export default NewsPage;
