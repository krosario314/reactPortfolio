import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/krosario22-resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React, Node.js, Express.js</li>
            <li>Photoshop</li>
            <li>Lightroom</li>
            <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;