import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Made with ❤️ by DeveloperFolio Team
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text-me" : "footer-text-me"}>
          Edited by Choe Ingyu
        </p>
      </div>
    </Fade>
  );
}
