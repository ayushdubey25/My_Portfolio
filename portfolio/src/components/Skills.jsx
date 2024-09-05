import React from "react";
import { Navbar } from "./Navbar";
import skills from "../components/data/skills.json";
import "./Skills.css";
import SkillCard from "./SkillCard";
import transition from "../../transition";
const Skills = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "-56px" }}>
        <img
          src="https://e0.pxfuel.com/wallpapers/83/655/desktop-wallpaper-black-background-plain-black-powerpoint-dark-presentation.jpg"
          alt=""
          className="w-100 background_image"
        />

        <div className="title">
          <h2>Skills</h2>
          <hr />

          <div>
            {skills.map((skill) => {
              return <SkillCard key={skill.id} skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default transition(Skills);
