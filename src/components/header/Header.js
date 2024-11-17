import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  educationInfo,
  skillsSection,
  // openSource,
  // achievementSection,
  bigProjects,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewEducationInfo = educationInfo.display;
  // const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewproject = bigProjects.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">프로그래밍 스킬</a>
            </li>
          )}
          {viewEducationInfo && (
            <li>
              <a href="#education">학력 및 교육</a>
            </li>
          )}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {viewproject && (
            <li>
              <a href="#projects">프로젝트(수상작)</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">자기소개서 및 이력서</a>
            </li>
          )}
          {/* <li>
            <a href="#contact">about me</a>
          </li> */}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
