import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CryptoNews() {
    const [newsList, setNewsList] = useState(null);
    
    useEffect(() => {
        const getNewsArticles = async () => {
            const response = await fetch(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=` + API_KEY);
            const json = await response.json();
            setNewsList(json);
        };
        getNewsArticles().catch(console.error);
    }, []);

    return (
        <div>
        <h3>Crypto News</h3>
            <ul className="side-list">
                {newsList && newsList.Data && newsList.Data.map((article) => 
                <li className="news-article" key={article.title}><a href={article.url}>{article.title}</a></li>
                )}
            </ul>
        </div>
    );
}

export default CryptoNews;