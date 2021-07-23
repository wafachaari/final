import React from 'react';
import meetup from '../../img/meet.png';
import movieapi from '../../img/mov.png';
import pokemon from '../../img/pok.png';
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import chat from '../../img/chat.png'
import pokVideo from '../../img/ach2.mp4'
import meetVideo from '../../img/meet-video.mp4'
import flixVideo from '../../img/flix-video.webm'
import chattVideo from '../../img/video 5.3.mp4'
function Projects() {
  return (
    <Container >
      <div >

        <Row className="project-card">
          <ProjectCard
            header="MongoDB | Express | React | Node.js | Redux | JSX | SCSS | Parcel | JavaScript | Bootstrap"
            imgPath={movieapi}
            title="ReactJS Web App - MyFlix"
            description=" Full stack application using React, JWT, and Node.js for serverside (which queries a REST API built from scratch)
             allows you to create a profile, browse movies, favorite movies, explore directors, and update information. "
            case_study="see case study"
            application="https://myflix-client-wafa.netlify.app/"
            github="https://github.com/wafachaari/myFlix-client"
            URl={flixVideo} />
        </Row>
        <Row className="project-card">
          <ProjectCard
            header="HTML | CSS | JavaScript | jQuery | Bootstrap"
            imgPath={pokemon}
            title="Javascript/jQuery Web App - PokéDex"
            description=" A javascript app with HTML,css,jquery ,that also loads data from an external API The styling for this app was created with help from Bootstrap and interacts with the Pokemon API. The development of Poke-Dex took a deep dive into advanced JavaScript methods and DOM interaction."
            application="https://wafachaari.github.io/simple-js-app/"
            github="https://github.com/wafachaari/simple-js-app"
            URl={pokVideo} />
        </Row>
        <Row className="project-card">
          <ProjectCard
            imgPath={meetup}
            title="ReactJS Meetup Progressive Web App"
            description="A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique and hosted by a cloud provider (Lambda AWS). Users of this app will be able to use this application whenever they want to view upcoming events for a specific city.."
            github="https://github.com/wafachaari/meet"
            header="React | CSS | JavaScript | OAuth2 | Jest | Serverless Programming"
            application="https://wafachaari.github.io/meet/"
            URl={meetVideo}
          />
        </Row>
        <Row className="project-card">
          <ProjectCard
            header="React-Native | CSS | React-Navigation | Firestore | Expo | JavaScript | GiftedChat | JSDocs"
            imgPath={chat}
            title="chatter-box"
            description="  This react native chat app utilizing react-gifted-chat delivers a real-time chat experience. It has Google Firestore for server side and storage services. Read the detailed readme.md in the GitHub link for more information.."
            github="https://github.com/wafachaari/chatApp2"
            application="https://github.com/wafachaari/chatApp2"
            URl={chattVideo} />
        </Row>

      </div>
    </Container>
  );
}
export default Projects;