import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
function About2() {
  return (
    <Container>
      <div className="flex-container">
        <Row style={{ justifyContent: "center" }}>
          <Col className="colskills"> Programming Language
          </Col>
          <Col className="colskills2">
            Java, Java JEE, C#, HTML, XML: Advanced <br></br>
            Matlab, C/C++, Maple, VHDL: Intermediate<br></br>
            javascript,Pascal, Assembler: basics</Col>
        </Row>
        <div className="ligne-about"></div>
        <Row>
          <Col className="colskills"> Embedded system
          </Col>
          <Col className="colskills2">
            FPGA, Embedded Linux, Qemu, ModelSim, Vivado, Keil uvision, Quartus</Col>
        </Row>
        <div className="ligne-about"></div>
        <Row>
          <Col className="colskills"> Conception method
          </Col>
          <Col className="colskills2">
            CoDesign, UML</Col>
        </Row>
        <div className="ligne-about"></div>
        <Row>
          <Col className="colskills"> Data Base
          </Col>
          <Col className="colskills2">
            Oracle, SQL Server, JBoss application server</Col>
        </Row></div>
    </Container>
  );
}
export default About2;