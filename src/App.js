import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import TourList from "./components/Tourlist/TourList";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
