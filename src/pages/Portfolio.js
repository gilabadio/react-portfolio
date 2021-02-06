import React, { useState } from 'react';
import Project from '../components/Project';


function Portfolio() {
  const [projects] = useState([
    {
      name: "Note Taker",
      url: "https://shielded-retreat-02291.herokuapp.com/",
      github: "https://github.com/gilabadio/note-taker",
      image: "note-taker.png"
    },
    {
      name: "Run Buddy",
      url: "https://gilabadio.github.io/run-buddy/",
      github: "https://github.com/gilabadio/run-buddy",
      image: "run-buddy.png"
    },
    {
      name: "Web-Buffet",
      url: "https://glacial-atoll-63430.herokuapp.com/",
      github: "https://github.com/JoshCarter8400/project-3",
      image: "web-buffet.png"
    },
   
    
    
  ]);

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, i) => (
          <Project project={project} key={i}></Project>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;