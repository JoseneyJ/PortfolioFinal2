import React from 'react';
import './intro.css';
import bg from '../../assests/image2.png';



const Intro = () => {
  return (
    
    <section id="intro">
    <div className='profile'>
    <img src={bg} alt='Profile' className="bg"/>
    </div>
    <div className="introContent">
        <span className="hello">Greetings!</span>
        <span className="introText"> I'm <span className= "introName">Joseney</span> <br />Software Developer</span>
        <p className="introPara">I am a highly motivated, results-driven professional with a passion for understanding and enhancing user experience. </p>
        <a href= "JoseneyJ. Resume.pdf" download="JoseneyJ. Resume.pdf">
         <button className="nav__button">My Resume</button>
        </a>

    </div>
  
   </section>
  );
}

export default Intro;