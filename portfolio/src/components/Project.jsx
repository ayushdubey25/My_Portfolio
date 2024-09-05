import React from "react";
import "./Project.css";
import { Navbar } from "./Navbar";
import projects from "../components/data/projects.json";
import { ProjectCard } from "./ProjectCard";
import transition from "../../transition";
const Project = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "-56px" }}>
        <img
          src="https://img.freepik.com/premium-photo/gradient-background-color-cyclone-scene-overlay-effect_965171-72.jpg"
          alt=""
          className="w-100"
          style={{ height: "1200px" }}
        />
        <div className="projects">
          <h2>Projects</h2>
          <hr />
          <div>
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default transition(Project);
