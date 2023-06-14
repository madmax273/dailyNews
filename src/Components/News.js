import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    console.log("i AM A constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let URL =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=cbb9809461a449128aa2fa4ffbaa0f72";
    let data = await fetch(URL);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <h1>News Headlines</h1>
          <div classaName="row ">
            {this.state.articles.map((element) => {
              return (
                <div className="col my-4">
                  <NewsItem
                    key={element.url}
                    title={element.title ? element.title : "title"}
                    description={
                      element.description ? element.description : "desc"
                    }
                    url={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://ichef.bbci.co.uk/news/1024/branded_news/5C9A/production/_130060732_p0ftkwzx.jpg"
                    }
                    newsUrl={
                      element.url
                        ? element.url
                        : "http://www.bbc.co.uk/news/world-europe-65867990"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
