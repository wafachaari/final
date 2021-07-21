 
import "./style.css";
import "./App.css";
import Navbarclass from "./components/Navbarclass";
import React, { Component } from 'react';
import { HashRouter, Link } from "react-router-dom";
import About from "./components/About/About"
import Home from "./components/Home/Home"
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
 <li><Link to="/Projects">Projects</Link></li>
        </ul> 
  
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={About} />
        </div>
      </HashRouter>
    );
  }
}

const ome = () => <div><Home></Home></div>
const bout = () => <div><About></About></div>

export default App;
