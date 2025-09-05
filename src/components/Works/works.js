import React from 'react'
import './works.css'
import Portfolio1 from '../../assests/portfolio-1.png'
import Portfolio2 from '../../assests/portfolio-2.png'
import Portfolio3 from '../../assests/portfolio-3.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className= 'worksTitle'> My Portfolio</h2>
        <span className='worksDesc'>I take pride in creating sites that are user-friendly in efforts to keep the user's attention by creating simple straighforward websites. Please take a look at some of my projects below. </span>
        <div className='worksImgs'>
            <a href= "https://joseneyj.github.io/WeatherForecast/" target="_blank" rel="noopener noreferrer"><img src={Portfolio2} alt='' className='worksImg'/>
            </a>
            <a href= "https://joseneyj.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer"><img src={Portfolio3} alt='' className='worksImg'/>
            </a>
            <a href="https://github.com/JoseneyJ/TruthIs2" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio1} alt='' className='worksImg'/>
            </a>cd
        </div>

 {/* <button className='workBtn'>View More</button> */}
    </section>
  );
}

export default Works