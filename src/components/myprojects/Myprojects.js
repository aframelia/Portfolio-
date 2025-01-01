import React from 'react'
import './myprojects.css' 
import { Link } from 'react-router-dom';



export default function Myprojects() {
    return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='flight.png' alt="" />
            </div>
            <h3>Flight App</h3>
            <small className='text-light'>UX/UI Case study</small>
            <div className="portfolio__item-cta">
            <Link to="/project1" className="btn btn-primary"> Case Study</Link>  
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='squidgies.png' alt="" />
            </div>
            <h3>E-commerce app</h3>
            <small className='text-light'>UX/UI Case study and React.js</small>
            <div className="portfolio__item-cta">
            <Link to="/project2" className="btn btn-primary"> Case Study</Link>              
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='TorontoMoc.png' alt="" />
            </div>
            <h3>Toronto Cupcake</h3>
            <small className='text-light'>UX/UI Case study</small>
            <div className="portfolio__item-cta">
            <Link to="/project3" className="btn btn-primary"> Case Study</Link>              
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='Portfoilio.png' alt="" />
            </div>
            <h3>Portfolio</h3>
            <small className='text-light'>Webiste created with React.js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aframelia/Portfolio-" target="_blank" rel='noreferrer' className='btn btn-primary'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src='Portfoilio.png' alt="" /> */}
            </div>
            <h3>ToDos App</h3>
            <small className='text-light'>App created with React.js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aframelia/ToDo" target="_blank" rel='noreferrer' className='btn btn-primary'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src='Portfoilio.png' alt="" /> */}
            </div>
            <h3>Weather App</h3>
            <small className='text-light'>App created with React.js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aframelia/WeatherApp" target="_blank" rel='noreferrer' className='btn btn-primary'>Github</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}