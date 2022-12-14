import React from "react";

const NewsItem = (props) => {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
    } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>
            
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
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
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

export default NewsItem;
