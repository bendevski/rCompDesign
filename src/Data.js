//was planning to scrape this, but nytimes runs on react, after I spent some time playing with selenium I gave up
import React, { Component } from 'react';


class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=vwa2bviB2SyjthbGYWjyU1NgmjGfGd43")
            .then(results => {
                return results.json();
            }).then(data => {
                let articles = data.results.map(function (post) {
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


                }
                )
                this.setState({
                    data: articles,
                });


            }
            )


    }

    render() {
        return (
            <div className="site">
                {this.state.data}
            </div>
        )
    }

}


export default Data;
