import React from 'react';
import meetup from '../../img/meet.png';
import movieapi from '../../img/mov.png';
import pokemon from '../../img/pok.png';
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import './Projects.css'
// Main component (will eventually use all the others)
function Projects() {
  return (
    <Container>
      <div>
        <Row className="project-card">
          <ProjectCard
            imgPath={meetup}
            title="ReactJS Meetup Progressive Web App"
            description="a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique and hosted by a cloud provider (Lambda AWS). Users of this app will be able to use this application whenever they want to view upcoming events for a specific city.."
            github="https://github.com/wafachaari/myFlix-client"
            header="React | CSS | JavaScript | OAuth2 | Jest | Serverless Programming"
            application="https://wafachaari.github.io/meet/"
          />
        </Row>
        <Row className="project-card">
          <ProjectCard
            header="MongoDB | Express | React | Node.js | Redux | JSX | SCSS | Parcel | JavaScript | Bootstrap"
            imgPath={movieapi}
            title="ReactJS Web App - MyFlix"
            description=" full stack application using React, JWT, and Node.js for serverside (which queries a REST API built from scratch) allows you to create a profile, browse movies, favorite movies, explore directors, and update information.."
            application="https://wafachaari.github.io/meet/"
            github="https://github.com/wafachaari/myFlix-clien" />
        </Row>
        <Row className="project-card">
          <ProjectCard
            header="HTML | CSS | JavaScript | jQuery | Bootstrap"
            imgPath={pokemon}
            // isBlog={false}
            title="Javascript/jQuery Web App - PokéDex"
            description="  a javascript app with HTML,css,jquery ,that also loads data from an external API The styling for this app was created with help from Bootstrap and interacts with the Pokemon API. The development of Poke-Dex took a deep dive into advanced JavaScript methods and DOM interaction."
            link="https://github.com/wafachaari/myFlix-clien"
            application="https://wafachaari.github.io/meet/"
          />
        </Row>
      </div>
    </Container>
  );
}
export default Projects;