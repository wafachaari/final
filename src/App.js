import React from 'react';
import "./style.css";
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
        <Switch>  
          <Route path="/final"   component={Home} />
          <Route path="/final#projects" component={Projects} />
          <Route path="/final#About" component={About} />
        </Switch>
        <Footer />
      </div></Router>
  );
}
export default App;
