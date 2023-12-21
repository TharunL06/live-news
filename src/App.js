import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  // setting the state
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="red"
            height="7px"
            setProgress={this.state.progress}
          />

          <Routes>
            {/* Here i'm trying render various things for different categories. Like this we creating routes*/}
            {/* whenever we pass the path that can be the key */}
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={9}
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  setProgress={this.setProgress}
                  pageSize={9}
                  category="business"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  setProgress={this.setProgress}
                  pageSize={9}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  setProgress={this.setProgress}
                  pageSize={9}
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  setProgress={this.setProgress}
                  pageSize={9}
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  setProgress={this.setProgress}
                  pageSize={9}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  setProgress={this.setProgress}
                  pageSize={9}
                  category="technology"
                  country="in"
                />
              }
            />
            {/* <Route exact path="/travel" element={<News key="travel"pageSize={10} category="travel" country="in" />}/>
        <Route exact path="/world" element={<News key="world"pageSize={10} category="world" country="in" />}/> */}
          </Routes>
        </Router>
      </>
    );
  }
}
