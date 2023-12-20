import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from  "./components/Navbar"
import News from  "./components/News"

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
        {/* Here i'm trying render various things for different categories. Like this we creating routes*/}
        {/* whenever we pass the path that can be the key */}
        <Route exact path="/" element={<News key="general"pageSize={9}country="in" />}/>
        <Route exact path="/business" element={<News key="business"pageSize={9} category="business" country="in" />}/>
        <Route exact path="/entertainment" element={<News key="entertainment"pageSize={9} category="entertainment" country="in" />}/>
        <Route exact path="/health" element={<News key="health"pageSize={9} category="health" country="in" />}/>
        <Route exact path="/science" element={<News key="science"pageSize={9} category="science" country="in" />}/>
        <Route exact path="/sports" element={<News key="sports"pageSize={9} category="sports" country="in" />}/>
        <Route exact path="/technology" element={<News key="technology"pageSize={9} category="technology" country="in" />}/>
        {/* <Route exact path="/travel" element={<News key="travel"pageSize={10} category="travel" country="in" />}/>
        <Route exact path="/world" element={<News key="world"pageSize={10} category="world" country="in" />}/> */}
        
      </Routes>

      </Router>
      </>
    )
  }
}
