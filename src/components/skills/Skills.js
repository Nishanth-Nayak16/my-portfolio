import React from "react";

import "./Skills.css";

import webdesign from "../../assests/webdesign.png";
import aws from "../../assests/aws.png";

const Skills = () => {
  return (
    <section id="skillset">
      <h1 className="skillsTtitle" id="skill">What I Do</h1>
      <p className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user friendly websites. I also have hands on
        experience in AWS services.
      </p>
      <div className="skillBars">
        <div className="skillBar">
          <img src={webdesign} alt="Web design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              I have strong understanding of website design and I am proficient
              in HTML, CSS, JavaScript and React.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={aws} alt="AWS Services" className="skillBarImg" />
          <div className="skillBarText">
            <h2>AWS Services</h2>
            <p>
              I have hands on experience in AWS services like Amazon Lex, Amazon
              Coonect, CloudWatch, Lambda and DynamoDB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
