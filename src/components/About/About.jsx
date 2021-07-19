import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
 import laptop from '../../img/clipart.png';
import attach from "../../img/att3.png"
import Icon from "./Icon";
import skills from '../../img/tools.png'
import About2 from "./About2"
import Animation from "./Animation"
 
function About() {
  return (
    <section>
      <Container fluid className="profile-container">
        <div class="profile">
          <Row style={{ justifyContent: "center" }}>
            <Col md={8}  >
              <p className="about-text" >I'am
                <div className="animation">
                   <Animation />
                </div>
                <br></br>⚡Technology is something I have been passionate about for as long as I can remember, so it wasn’t a difficult decision to choose my career.
                <br></br><br></br>⚡my sense of curiosity and my drive to get things done make me want to develop my own technical solutions.  here is my role, which included identifying problems and gathering requirements from various stakeholders.
                <br></br><br></br> ⚡Because of my positive mindset, I can cope with time pressure and work with the highest performance to meet deadlines.
                <br></br><br></br>⚡Over the course of my life, I have developed expertise in several areas of web development. I am seeking to continue this growth by opening myself to opportunities that are guaranteed to challenge me.
                <br></br><br></br>You can review my latest work in my <span >portfolio</span> and read more about my skills, education, and much more in my <span>resume</span>.          </p>
              <div class="buttons">
                <a href="../../img/lebenslauf-wafachaari.pdf" download>
                  <button class="blob-btn" >
                    <img className="lebenslauf-img" src={attach} alt="attach"></img>
                       see my resume here 
                    <span class="blob-btn__inner">
                      <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button></a>
                <br />
              </div>
            </Col>
            <Col className="about-img">
              <img alt="laptop" src={laptop} className="img-about" />
            </Col>

            {/* <Col md={6}>
              <div className="lebenslauf" >

                <div class="buttons">
                  <button class="blob-btn">
                    <img className="lebenslauf-img" src={attach}></img>
                    download
                    <span class="blob-btn__inner">
                      <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button>
                  <br />
                </div>
                <div className="imgg">
                  <img className="lebenslauf-img" src={attach}></img>

                  <img src={lebenslauf}></img></div>
              </div>
            </Col> */}
          </Row>
        </div>
      </Container>
      <div className="skills">
        <h1 className="skills-text"><img alt="skills "className="skills-img" src={skills}></img>
          The Skills..</h1>
        <About2 />
      </div>
      <div className="icon"> <Icon />
      </div>
    </section>
  );
}
export default About;