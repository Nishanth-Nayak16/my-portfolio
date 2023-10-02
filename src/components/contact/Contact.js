import React from "react";

import "./Contact.css";

import linkedinimg from "../../assests/linkedin.png";
import githubimg from "../../assests/github.png";
import call from '../../assests/call.png'

const Contact = () => {
  return (
    <section className="contactPage" id="contacts">
      <span className="contactTitle">Get In Touch</span>
      <span className="callDesc"><img className="call" src={call} alt="Call" /> <p>+91 7760008734</p></span>
      <p className="contactDesc">
        Please fill out the below form to contact me
      </p>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          <img src={githubimg} alt="Github" className="link" />
          <img src={linkedinimg} alt="LinkedIn" className="link" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
