import React from "react";
import { getImageUrl } from "../../utils";
import "./Project.css";

export const ProjectCard = ({
  project: { title, description, imageSrc, skills, demo, source },
}) => {
  return (
    <div>
      <div className="projectcard cardanimation">
        <img src={imageSrc} />
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {skills.map((skill, id) => (
            <li key={id}>{skill}</li>
          ))}
        </ul>
        <div>
          <a href={demo}>Demo </a>
          <a href={source}> Source</a>
        </div>
      </div>
    </div>
  );
};
