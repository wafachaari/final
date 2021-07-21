import React from 'react';
import "./style.css";import { HashRouter } from "react-router-dom";
import "./App.css";
import Navbarclass from "./components/Navbarclass";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App" >
        <Navbarclass />
          <HashRouter>  
          <Route path="/final"   component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/About" component={About} />
        </HashRouter>
       
        <Footer />
      </div></Router>
  );
}
export default App;
