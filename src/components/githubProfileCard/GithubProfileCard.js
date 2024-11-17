import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">about me</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle prof-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{String(prof.bio)}"</h2>
            {prof.location !== null && (
              <div className="location-div">
                <span className="location-prof">{`📍${prof.location}`}</span>
              </div>
            )}
            <div className="opp-div">
              <span className="desc-prof">
                {/* Open for opportunities: {prof.hireable} */}
                멋진 인재가 준비 되어있습니다.
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
