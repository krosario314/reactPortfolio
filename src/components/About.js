import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Kayla M Rosario"/>
      <p className="content is-italic mt-4">
        I'm Kayla M Rosario, I am currently a student for Rutgers Coding Bootcamp looking to find a career in computer science.
      </p>
      <p className="content">
        I have knowledge in photoshop, lightroom, HTML, CSS, Javascript, NodeJS, ExpressJS, MySQL, React and MERN.
      </p>
    </div>
  );
}

export default About;