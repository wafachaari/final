import React from "react";
import Typewriter from "typewriter-effect";

function Animation() {
  return (
    <Typewriter
      options={{
        strings: [
           
          "Computer science Engineer",
          "Full Stack Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Animation;
