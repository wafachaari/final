import React from 'react';
 
import { Container, Row, Col } from "react-bootstrap";
 
import './Home.css';
import Home2 from './Home2'
import logo from '../../img/indexsustainble.svg';
import logo1 from '../../img/indexpixed.svg';
import logo2 from '../../img/indexneed.svg';
// Main component (will eventually use all the others)
function Home() {
  return (
    <section className="section section-lg">
      <Container fluid className="imgc" >
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
        </Container>
      </Container>

      <Container   className="index-table">

        <Row className="home2-row">
          <Col className="col" >
            <Home2 img={logo}
              title="User first"
              text="when I start to code,I switch on an user mind and see the problem to resolve from his perspective"
            ></Home2>
          </Col>
          <Col className="col" >
            <Home2 img={logo1}
              title="never storp learning"
              text="For me, this is the basic for developer.I like the challenges and make new things.So, it implies to never stop learning new skills"></Home2>
          </Col>
          <Col className="col" >
            <Home2 img={logo2}
              title="Re-useful code"
              text="when I code, my effort it's on make the code be reuseful and simple.
           To keep my skills ahead of the curve, I am constantly honing my skills to new techniques and technologies"
            ></Home2>
          </Col>

        </Row>
      </Container>

    </section>
  );



}
export default Home;