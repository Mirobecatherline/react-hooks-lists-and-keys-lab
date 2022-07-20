import ProjectItem from "./ProjectItem";
import React from "react";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsdone=projects.map((flow)=>{return(<ProjectItem key={flow.id} name={flow.name} about={flow.about} technologies={flow.technologies}/>)})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projectsdone}
      </div>
    </div>
  );
}

export default ProjectList;
