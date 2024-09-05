import React from "react";
import "./Skills.css";
import transition from "../../transition";
const SkillCard = ({ skill }) => {
  if (!skill) {
    return <div>No skill data available</div>;
  }

  return (
    <div>
      <div className="cardd cardanimation" key={skill.id}>
        {skill.imagesrc ? (
          <img src={skill.imagesrc} alt={skill.titles || "Skill"} />
        ) : (
          <div>No image available</div>
        )}
        <h1>{skill.titles || "Title not available"}</h1>
        <p>{skill.detail || "Detail not available"}</p>
      </div>
    </div>
  );
};
export default SkillCard;
