import React from "react";

import "./Experience.css";

import suitcase from "../../assests/suitcase.png";
import degree from "../../assests/degree.png";

const Experience = () => {
  return (
    <section className="experience_section" id="experience">
      <h1 className="experience__title">Experience</h1>
      <p className="experience__desc">My Education and Work Experience</p>
      <div className="experience__container">
        <div className="info__section">
          <div className="info_box">
            <img
              width="40"
              height="40"
              src={degree}
              alt="education"
              className="icon__img"
            />
            <span className="timeline__date">2016-2018</span>
            <h3 className="timeline__title">Bachelor's Degree</h3>
            <p className="timeline__text">
              Computer Science and Engineering from BNMIT
            </p>
          </div>
          <div className="info_box">
            <img
              width="40"
              height="40"
              src={degree}
              alt="education"
              className="icon__img"
            />
            <span className="timeline__date">2016-2018</span>
            <h3 className="timeline__title">PUC Degree</h3>
            <p className="timeline__text">
              PCMC From Viveka PU College, Kota, Udupi
            </p>
          </div>
        </div>
        <div className="info__section">
          <div className="info_box">
            <img
              width="40"
              height="38"
              src={suitcase}
              alt="suitcase"
              className="icon__img"
            />
            <span className="timeline__date">2023-Present</span>
            <h3 className="timeline__title">Associate</h3>
            <p className="timeline__text">UI Developer at PWC AC, Bangalore</p>
          </div>
          <div className="info_box">
            <img
              width="40"
              height="38"
              src={suitcase}
              alt="suitcase"
              className="icon__img"
            />
            <span className="timeline__date">2022-22 (6 Months)</span>
            <h3 className="timeline__title">Intern</h3>
            <p className="timeline__text">
              Cloud Innovation Intern at PwC AC, Bangalore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
