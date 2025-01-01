import React from 'react';
import './projects.css';
import Nav from '../components/nav/Nav'
// import Footer from '../components/Footer/Footer'

export default function ProjectDetail() {
  return (
    <div className="project-detail">
       <Nav />
      <header className="project-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/squidgies.png')`, // Replace with your image name from the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px', // Match the height to your design
          position: 'relative',
          color: 'white',
          // display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
        }}>
          <h1>E-commerce App</h1>
          <p>Squidgies an e-commerce for kids clothes.</p>
      </header>

      <section className="overview">
        <h2>Project Overview</h2>
        <div className="content">
          <div>
            <h3>Problem</h3>
            <p>A lot of times people enter a shopping app and find items they love, but sadly they find it doesn’t have the right size or is out of stock. Most people see these as a waste of time.</p>
          </div>
          <div>
            <h3>Solution</h3>
            <p>To create an aggregator shopping app. By registering a child details, it will only show items that match that registration, it will not show any item out of size or out of stock. It will be time saving since you don’t have to go through the filters or worry it will not be available on your child size.</p>
          </div>
        </div>
      </section>

      <section className="details">
        <h2>Details</h2>
        <div className="details-grid">
          <div>
            <h3>Tools:</h3>
            <p>Figma</p>
            <p>React.js</p>
          </div>
          <div>
            <h3>Team:</h3>
            <p>Designer</p>
          </div>
          <div>
            <h3>My Role:</h3>
            <p>UX Designer,</p>
            <p>Developer</p>
          </div>
          <div>
            <h3>Timeline:</h3>
            <p>6 weeks</p>
          </div>
        </div>
      </section>

      <section className="process">
        <h2>My Design Process</h2>
        <div className="steps">
          <div>01. Ideation</div>
          <div>02. Research</div>
          <div>03. Wireframes</div>
          <div>04. UI Design</div>
          <div>05. Testing</div>
        </div>
      </section>

      {/* <div className="row-container">
        <section className="interviews">
          <h2>Interviews</h2>
          <p>
            The first step was interviewing some regular flight search users. Here, I interviewed three people aged between 20-30. 
            A few things they had in common were the love of travel and having family abroad they liked to visit regularly. 
            They normally look for cheap flights and better still if they secure direct flights with a well-known airline carrier. 
            Something else that I have noticed is that they look for flights months in advance to get cheaper flights, 
            especially if they intend to travel during the holiday seasons.
          </p>
        </section>

        <section className="pains">
          <h2>Pain Points</h2>
          <p>So I picked some important goals for the user and sorted them from most important to least important:</p>
          <ul>
            <li>- Searching for the cheapest flight.</li>
            <li>- Looking for the best dates to fly.</li>
            <li>- Being able to set a budget in the search engines.</li>
            <li>- Not having to do the calculations (having clear results of the total flight cost and date).</li>
            <li>- Getting results from just known and trusted companies.</li>
            <li>- No change in cost when the flight is selected.</li>
            <li>- Making the booking process easy and quick.</li>
          </ul>
        </section>
      </div>


       */}
      <div className="row-container">
      <section className="personas1">
        <h2>Personas</h2>
        <img src="/PersonaClothes1.png" alt="Persona" />
      </section>
      <section className="personas2">
        <h2>Personas</h2>
        <img src="/PersonaClothes2.png" alt="Persona" />
      </section>
      </div>

      <section className="user-journey">
        <h2>User Journey</h2>
        <img src="/squidgiesJurney.png" alt="Journey" />
      </section>
{/* 
      <section className="sketches">
        <h2>Sketches</h2>
        <img src="/sketches.png" alt="Sketch" className="Sketch" />
      </section> */}

      <section className="ui-design">
        <h2>UI Design</h2>
        <img src="/squidgiesUI.png" alt="UI Design" />
      </section>

      <section className='learnings'>
        <h2>Learnings</h2>
        <p>The project helped me learn the importance of user feedback and iterative design. The challenges faced during the design process taught me how to simplify complex tasks and provide the best experience for users.</p>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
