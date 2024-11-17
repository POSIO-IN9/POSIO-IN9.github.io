import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import {socialMediaLinks} from "../../portfolio";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import frontImage from "../../assets/images/myimg.jpg";
import backImage from "../../assets/images/backimg.jpg";
import FlipImage from "../../components/Flipimg/Greetingimg";
export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  const copyToClipboard = () => {
    const email = socialMediaLinks.gmail;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        const alert = document.getElementById("alert");
        alert.style.opacity = "1";

        setTimeout(() => {
          alert.style.opacity = "0";
        }, 2000);
      })
      .catch(error => {
        console.error("클립보드 복사 실패:", error);
      });
  };

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h2
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.greeting}
                <span className="wave-emoji">{emoji("👋")}</span>
                <br />
                <span className="greeting-text-intro">
                  {greeting.intro}
                </span>{" "}
                {greeting.myname}{" "}
              </h2>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <br />
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p "
                }
              >
                {greeting.subTitle2}
              </p>
              <br />
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p "
                }
              >
                {greeting.subTitle3}
              </p>
              <br />
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p "
                }
              >
                {greeting.subTitle4}
              </p>
              <div id="resume" className="empty-div"></div>
              <div className="mail">
                <div className="tooltip-container" onClick={copyToClipboard}>
                  <span className="tooltip">{socialMediaLinks.gmail}</span>
                  <span className="text">email</span>
                  <span id="alert" className="copy-alert">
                    email 복사 완료!
                  </span>
                </div>
              </div>

              <div className="button-greeting-div">
                <Button
                  text="자기소개서 내려받기"
                  className="download-link-button button"
                  href={require("../../assets/resume/자기소개서(최인규).pdf")}
                  newTab={true}
                />

                <Button
                  text="이력서 내려받기"
                  className="download-link-button"
                  href={require("../../assets/resume/이력서(최인규).pdf")}
                  newTab={true}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="myimg">
              <FlipImage
                frontImage={frontImage}
                backImage={backImage}
                size={350}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
