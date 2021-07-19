import Card from 'react-bootstrap/Card';
import React from "react";
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import Player from "./reactPlayer";

class ProjectCard extends React.Component {
 /* state = {
    open: false
  };

  onOpenModal = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };*/
  render() {
    return (
      <Card className="project-card-view">
        <Card.Header className="header">{this.props.header}</Card.Header>
        <Card.Body  >
          <Card.Img src={this.props.imgPath} className="image-card" />
          <Card.Title class="card-title">{this.props.title}</Card.Title>
          <Card.Text className="text" style={{ textAlign: "justify" }}>
            {this.props.description}
          </Card.Text>
          <Button className="button-class" href={this.props.github}>Code</Button>
          <Button className="button-class" href={this.props.application}>Application</Button>
          <Button className="button-class" >Demo</Button>
          {/* <Button className="button-class" onClick={this.onOpenModal}>Demo </Button> */}
          {/* <Player open={this.state.open} toggleModal={this.onOpenModal} /> */}
        </Card.Body>
      </Card>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<ProjectCard />, rootElement);
export default ProjectCard;