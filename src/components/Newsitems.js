import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    // get all the data here as well, whenever this load need to iterate
    let { title, description, url, linkurl, author, publishedAt, source } =
      this.props; // this can be getting the data from the props
    return (
      // want to display the data, after getting
      <>
        <div className="container mt-4">
          <div className="card">
            <img src={url} alt="not found" className="card-mg-top"></img>
            <div className="card-body">
              <span
                className="bagde rounded-pill bg-primary text-light"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  right: "0px",
                  top: "0px",
                }}
              >
                {source}
              </span>
              {/* using javascript need to split title */}
              <h5 className="card-title text-success">
                {title.split("", 50)}...
              </h5>
              <p className="card-text">
                {description ? description.split("", 200) : "No Description"}
              </p>
              <p><strong>By :</strong> {author ? author : "Anonymous"}</p>
              <hr></hr>
              <p><strong>PublishedAt :</strong> {publishedAt}</p>
              <a href={linkurl} className="btn btn-info">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
