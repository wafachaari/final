 
import "./style.css";
import "./App.css";
import Navbarclass from "./components/Navbarclass";
import React, { Component } from 'react';
import { HashRouter, Link } from "react-router-dom";

import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
/*function App() {
  return (
    <Router>
      <div className="App" >
        <Navbarclass />
         
          <Route path="/final"   component={Home} />
          <About></About><Projects></Projects>
             
        <Footer />
      </div></Router>
  );
}
export default App;*/
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
