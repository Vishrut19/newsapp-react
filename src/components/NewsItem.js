import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/11/15/1600x900/android_1668493681226_1668493681530_1668493681530.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
