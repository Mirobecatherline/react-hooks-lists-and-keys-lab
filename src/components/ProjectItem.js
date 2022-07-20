import React from "react";

function ProjectItem({ name, about, technologies }) {
  const tech=technologies.map((namegiven)=>{return(<span key={namegiven}>{namegiven}</span>)});
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
