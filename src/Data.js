//was planning to scrape this, but nytimes runs on react, after I spent some time playing with selenium I gave up
import React, { useEffect, useState } from 'react';

const NYT_API_URL = "https://api.nytimes.com/svc/topstories/v2/science.json";
const NYT_API_KEY = "vwa2bviB2SyjthbGYWjyU1NgmjGfGd43";

function Data() {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`${NYT_API_URL}?api-key=${NYT_API_KEY}`)
            .then(results => results.json())
            .then(data => {
                setArticles(data.results);
            });
    });

    return (
        <div className="site" >
            {articles.map(function (post) {
                if (!post.multimedia.length) {
                    return (<div key={post.short_url}></div>)
                }
                return (
                    <div className="post" key={post.short_url}>
                        <div className="date">
                            {post.published_date.slice(0, 10)}
                        </div>
                        <div className="mid">
                            <h1>{post.title}</h1>
                            <p>{post.abstract}</p>
                            <h2>{post.byline}</h2>
                        </div>
                        <div className="pic">
                            <img src={post.multimedia[0].url} alt={post.multimedia[0].caption} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Data;
