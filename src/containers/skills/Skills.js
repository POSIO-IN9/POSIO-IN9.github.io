import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  const colors = [
    "text-yellow-500",
    "text-green-500",
    "text-blue-700",
    "text-blue-400"
  ];

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <SoftwareSkill />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skill-content-div">
            {skillsSection.skills.map((item, index) => {
              return (
                <p
                  key={item.id}
                  className={isDark ? "dark-mode  skills-text" : " skills-text"}
                >
                  <br />
                  <span className={`text-3xl ${colors[index % colors.length]}`}>
                    {item.skill}
                  </span>

                  <br />
                  {item.content}
                </p>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}
