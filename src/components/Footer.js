import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import git from '../img/github.png'
import twitter from '../img/twitter.png'
import link from '../img/link3.png'
import inst from '../img/inst.png'
function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"  >
          <h2 className="text-black">
            Reach Out to me!
          </h2>
          <p className="paragraph">
            Discuss a project or just want to say Hi?!!
          </p>
          <p className="paragraph"> Feel free to <span className="white">connect </span> with me
          </p>
          <div className="icon">
            <a
              href=" https://github.com/wafachaari"
              style={{ color: "black" }}
            >
              <img alt="git" src={git}></img>
            </a>
            <a
              href=" "
              style={{ color: "black" }}
            ><img alt="link" src={link}></img>
            </a>
            <a
              href=" https://twitter.com/wafa_chaari "
              style={{ color: "black" }}
            ><img alt="twitter" src={twitter}></img>
            </a>
            <a
              href=" https://twitter.com/wafa_chaari"
              style={{ color: "black" }}
            >
              <img alt="inst" src={inst}></img>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
