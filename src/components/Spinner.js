import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="text-center">
          <iframe
            src="https://giphy.com/embed/ZO9b1ntYVJmjZlsWlm"
            width="100%"
            height="100%"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}
