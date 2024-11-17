import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
export default function StartupProject() {
  // function openUrlInNewTab(url) {
  //   if (!url) {
  //     return;
  //   }
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="pj-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="pjcard-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={
                        isDark ? "dark-mode pjcard-title" : "pjcard-title"
                      }
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode pjcard-subtitle" : "pjcard-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    <p
                      className={
                        isDark ? "dark-mode pjcard-subtitle" : "pjcard-subtitle"
                      }
                    >
                      {project.projectsubtitle}
                    </p>
                    <br />
                    <div className="project-card-footer">
                      <div>
                        <Link to="/project">
                          <Button
                            onClick={() => window.scrollTo(0, 0)}
                            text={"프로젝트 자세히 보기"}
                            className="project-button"
                          />
                        </Link>
                      </div>
                      <div>
                        <Button
                          text={"시연영상 보기 및 내려받기"}
                          className="project-button"
                          href={project.footerLink[0].url}
                          newTab={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
