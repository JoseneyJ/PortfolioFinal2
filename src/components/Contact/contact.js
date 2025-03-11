import React from "react";
import "./contact.css";
import GithubIcon from "../../assests/github-icon.png";
import LinkedinIcon from "../../assests/linkedin-icon.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxqccce', 'template_vgytogn', form.current,'AKdR5Opj6JW_UC0EP',)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <section id="contactPage">
    
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"> Please fill out the form below to discuss any work opportunites</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name='your_name' />
          <input type="email" className= "email" placeholder="Your email" name='your_email' />

          <textarea className="msg" name="message" rows="5" placeholder="Enter your message"></textarea>

          <button type="submit" value="Send" className= "submitBtn">Submit</button>

          <div className="links">
          <a href="https://www.linkedin.com/in/joseney-jean-pierre/" target="_blank" rel="no opener noreferrer">
          <img src={LinkedinIcon} alt="Linkedin" className="link"/>
          </a>
        <a href="https://github.com/JoseneyJ" target="_blank" rel="no opener noreferrer"> 
        <img src={GithubIcon} alt="Github" className="link"/>
        </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
