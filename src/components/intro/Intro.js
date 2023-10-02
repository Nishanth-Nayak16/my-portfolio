import React from "react";

import "./Intro.css";

import background from "../../assests/profile.png";

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="introInfo">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Nishanth</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled frontend developer with experience in creating visually <br/> apealing and user friendly websites.
        </p>
      </div>
      <img className="bg" src={background} alt="background" />
    </section>
  );
};

export default Intro;
