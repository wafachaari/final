import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../img/logo-header.svg'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
function Navbarclass() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="https://wafachaari.github.io/final/" >
          <img src={icon} className="img-fluid logo" alt="brand" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home" >
            <Nav.Item>
              <Nav.Link className="navlink" as={Link} to="/final">
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink"  
              
       to="/About"
              
              >
               
               
               
               
               
                <AiOutlineUser style={{ marginBottom: "2px" }} />
                About
              </Nav.Link>
            </Nav.Item><Nav.Item>
              <Nav.Link className="navlink" as={Link} to="#Projects">
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                projects
              </Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="ligne" ></div>
    </div>
  )
}
export default Navbarclass;