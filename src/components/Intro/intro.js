import React from 'react';
import './intro.css';
import bg from '../../assests/image.png';



const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Greetings!</span>
        <span className="introText"> I'm <span className= "introName">Joseney</span> <br />Software Developer</span>
        <p className="introPara">I am a motivated Software Developer with a passion for understanding user experience. </p>
        <a href= "JoseneyJ. Resume.pdf" download="JoseneyJ. Resume.pdf">
         <button className="nav__button">My Resume</button>
        </a>

    </div>
    <img src={bg} alt="Profile" className="bg"/>
   </section>
  );
}

export default Intro;