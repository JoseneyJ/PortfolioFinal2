import React from 'react';
import './skills.css';
import UIDesign from '../../assests/ui-design.png';
import WebDesign from '../../assests/website-design.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I do </span>
        <span className='skillDesc'>I am a Software Developer and Graphic Designer, blending code with creativity ensuring that aesthetics align seamlessly with functionality. With expertise in front-end and back-end development and a keen eye for detail and a commitment to continuous learning. I am always eager to tackle new challenges and deliver exceptional results.</span>
        <div className='skillBars'>
            <div className='skillBar'>
            <img src={UIDesign} alt= "UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Developer</h2>
            </div>
            </div>
            <div className='skillBar'>
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Graphic Designer</h2>
            </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;