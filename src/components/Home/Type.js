import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Life Sciences Engineer",
          "Bioengineering Researcher",
          "Bioinformatics Enthusiast",
          "Athlete & Scientist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
