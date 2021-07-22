import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
function ProjectCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <Card className="project-card-view">
        <Card.Header className="header">{props.header}</Card.Header>
        <Card.Body  >
          <Card.Img src={props.imgPath} className="image-card" />
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="text" style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Card.Link className="card-casestudy">{props.case_study}</Card.Link>
<br></br>
          <Button className="button-class" href={props.github}>Code</Button>
          <Button className="button-class" href={props.application}>Application</Button>
          <Button className="button-class" onClick={() => setModalIsOpen(true)} >Demo</Button>
          <Modal className="modalk" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
            center>
            <div>
              <ReactPlayer url={props.URl} controls={true} width="100%" playing
                height="calc(100vh - 100px)" ></ReactPlayer>
            </div>
          </Modal>
        </Card.Body>
      </Card>

    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ProjectCard />, rootElement);
export default ProjectCard;