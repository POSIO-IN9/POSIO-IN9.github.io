import React, { useContext } from "react"
import Headroom from "react-headroom"
import "./Header.scss"
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch"
import StyleContext from "../../contexts/StyleContext"
import { greeting } from "../../portfolio"

function Header({ section }) {
  const { isDark } = useContext(StyleContext)

  const handleScroll = (i) => {
    if (section.current[i]) {
      section.current[i].scrollIntoView({ behavior: "smooth" })
    }
  }

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
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <p onClick={() => handleScroll(0)}>프로젝트 소개</p>
          </li>
          <li>
            <p onClick={() => handleScroll(1)}>프로젝트 설계 내용</p>
          </li>
          <li>
            <p onClick={() => handleScroll(2)}>위기와 극복</p>
          </li>
          <li>
            <p onClick={() => handleScroll(3)}>소감 및 이후</p>
          </li>
          <li>
            <p>
              <ToggleSwitch />
            </p>
          </li>
        </ul>
      </header>
    </Headroom>
  )
}

export default Header
