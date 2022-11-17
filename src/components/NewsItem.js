import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%" , zIndex:1}}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/img/2022/11/15/1600x900/android_1668493681226_1668493681530_1668493681530.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unkown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
