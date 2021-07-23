import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Home2 from './Home2'
import logo from '../../img/indexsustainble.svg';
import logo1 from '../../img/indexpixed.svg';
import git from '../../img/github.png'
import link from '../../img/link3.png'
import attach from "../../img/att3.png"
import twitter from '../../img/twitter.png'
import inst from '../../img/inst.png'
 
import pdf from "../../img/lebenslauf-WafaChaari.pdf"
import logo2 from '../../img/indexneed.svg';
function Home() {
  return (
    <section className="section section-lg">
      <Container fluid className="home_section" >
        <Container className="container_home">
          <Row>
            <Col md={6}>
              <h1>Hi There <span className="wave">👋🏻</span>,</h1>
              <h1>I am   <strong className="main-name"> WAFA CHAARI</strong></h1>
              <h2 className="home-text">this is my little corner on the internet.
                I'm a computer science engineer and a full stack web developer with an aptitude for solving problems and a desire to learn.
              </h2>
            </Col>
            <Col md={6}>
              <div className="blobs">
                <div className="blob" >𝓿𝓪𝓻𝓲𝓮𝓽𝔂</div>
                <div className="blob">𝓬𝓻𝓮𝓪𝓽𝓲𝓿𝓮</div>
                <div className="blob">𝓼𝓴𝓲𝓵𝓵𝓼</div>
                <div className="blob">𝓬𝓱𝓪𝓵𝓵𝓮𝓷𝓰𝓮</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
            </Col>
          </Row>





          <Row className="home-icon">
            <a
              href=" https://github.com/wafachaari"
              style={{ color: "black" }}
            >
              <img className="icon-img" alt="git" src={git}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/wafa-chaari-8b98a0206/ "
              style={{ color: "black" }}
            ><img className="icon-img" alt="link" src={link}></img>
            </a>
            <a
              href=" https://twitter.com/wafa_chaari "
              style={{ color: "black" }}
            ><img className="icon-img" alt="twitter" src={twitter}></img>
            </a>
            <a
              href="https://www.instagram.com/chaari.wafa/"
              style={{ color: "black" }}
            >
              <img className="icon-img" alt="inst" src={inst}></img>
            </a>
          </Row> 
            <div className="buttons">
                <a  href={pdf} className="a"  target="_blank" download>
                  <button className="btn-home">
                    <img className="lebenslauf-img" src={attach} alt="attach"></img>
                    see my resume here
                    
                  </button></a>
                <br />
              </div>
        </Container>

      </Container>

      <Container className="index-table">
        <Row className="home2-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="home2-card" >
            <Home2 img={logo}
              title="User first"
              text="I switch on a user mind and see the problem to resolve from his perspective."
            ></Home2>
          </Col>
          <Col md={4} className="home2-card" >
            <Home2 img={logo1}
              title="Never storp learning"
              text=" I like the challenges and make new things. So, it implies never stop learning new skills"></Home2>
          </Col>
          <Col md={4} className="home2-card" >
            <Home2 img={logo2}
              title="Re-useful code"
              text="when I code, my effort it's to make the code be reuseful and simple."
            ></Home2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Home;