
import React from 'react';
function Resume() {
  return (
    <section id="resume">
      <h2 className="text-center text-sm-left ">Resume</h2>
      <h3 className="text-center text-sm-left display-4">Front-end</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript (ES6)</li>
        <li>JQuery</li>
        <li>React</li>
      </ul>
      <h3 className="text-center text-sm-left display-4">Back-end</h3>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;