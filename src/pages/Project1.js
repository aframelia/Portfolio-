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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/flight.png')`, // Replace with your image name from the public folder
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
          <h1>Flight App</h1>
          <p>Here comes a teaser about the project</p>
      </header>

      <section className="overview">
        <h2>Project Overview</h2>
        <div className="content">
          <div>
            <h3>Problem</h3>
            <p>Imagine a situation in which you are looking to take a brief holiday or planning to visit family abroad and want to book a flight. You want the flight to be cheap and you’re quite flexible with dates. You go to look for tickets on the relevant website (e.g. Skyscanner or Ryanair) and start looking for a flight. For the days you specify the website retrieves tickets that are way beyond your budget, so you go back to enter new dates and continue this process indefinitely until you find your ticket. This process is clearly tedious and frustrating! What we propose below is an attempt to remedy some of these issues.</p>
          </div>
          <div>
            <h3>Solution</h3>
            <p>The solution is simple. We propose allowing the user to specify a range of dates and a minimum and maximum budget and then retrieving a sorted list of tickets within the date range. We also allow the user to view these tickets via a calendar grid. In summary, this enables the user to view all the prices without having to search day by day.</p>
          </div>
        </div>
      </section>

      <section className="details">
        <h2>Details</h2>
        <div className="details-grid">
          <div>
            <h3>Tools:</h3>
            <p>Figma</p>
          </div>
          <div>
            <h3>Team:</h3>
            <p>Designer</p>
          </div>
          <div>
            <h3>My Role:</h3>
            <p>UX Designer</p>
          </div>
          <div>
            <h3>Timeline:</h3>
            <p>2 weeks</p>
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

      <div className="row-container">
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


      
      <div className="row-container">
      <section className="personas1">
        <h2>Personas</h2>
        <img src="/FlightPersona1.png" alt="Persona" />
      </section>
      <section className="personas2">
        <h2>Personas</h2>
        <img src="/FlightPersona2.png" alt="Persona" />
      </section>
      </div>

      <section className="user-journey">
        <h2>User Journey</h2>
        <p>The customer journey was mapped out to understand how users interact with the app from beginning to end:

Flight Search: The user enters their departure and destination details.
Filters: They refine their options based on price, travel dates, and more.
Booking: After selecting the flight, the user proceeds to checkout, enters payment information, and confirms the booking.</p>
      </section>

      <section className="sketches">
        <h2>Sketches</h2>
        <img src="/sketches.png" alt="Sketch" className="Sketch" />
      </section>

      <section className="ui-design">
        <h2>UI Design</h2>
        <img src="/flights.png" alt="UI Design" />
      </section>

      <section className="next-steps">
        <h2>Next Steps</h2>
        <ul>
          <li>User Testing: We plan to run A/B tests to understand how users interact with different interface elements.</li>
          <li>Expand Features: Incorporate more features like multi-city booking and flight suggestions based on user preferences.</li>
        </ul>
      </section>
      <section className='learnings'>
        <h2>Learnings</h2>
        <p>The project helped me learn the importance of user feedback and iterative design. The challenges faced during the design process taught me how to simplify complex tasks and provide the best experience for users.</p>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
