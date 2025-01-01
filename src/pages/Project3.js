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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/TorontoMoc.png')`, // Replace with your image name from the public folder
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
        <h1>Toronto Cupcake</h1>
        <p>Here comes a teaser about the project</p>
      </header>

      <section className="overview">
        <h2>Project Overview</h2>
        <div className="content">
          <div>
            <h2>Problem</h2>
            <p>Customers found the website difficult to navigate, with unclear menus and a confusing checkout process. Many users couldn’t easily find the information they needed, like ingredients or product reviews, leading to frustration and abandoned purchases.</p>
          </div>
          <div>
            <h2>Solution</h2>
            <p>We redesigned the website to make it easier to use. The navigation was simplified, the cart icon made visible at all times, and the checkout process streamlined. We also added product details like ingredients and reviews to help customers make informed choices, creating a smoother and more enjoyable shopping experience.</p>
          </div>
        </div>
      </section>

      <section className="details">
        <h2>Details</h2>
        <div className="details-grid">
          <div>
            <h3>Tools</h3>
            <p>Figma, Adobe, etc.</p>
          </div>
          <div>
            <h3>Team</h3>
            <p>Designer, Developer, etc.</p>
          </div>
          <div>
            <h3>My Role</h3>
            <p>UX Designer</p>
          </div>
          <div>
            <h3>Timeline</h3>
            <p>4 weeks</p>
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
        <h2>User Needs</h2>
        <p>Once I identified the problems and used the user persona as a guide, I came up with some features this website must have or would be nice to have for the user.</p>
        <ul>
          <li>- Clear navigation bar with a cart icon.</li>
          <li>- CTA (to make quicker and easier orders) and go to cupcakes list quicker.</li>
          <li>- Clear cart page and checkout page.</li>
          <li>- Ingredients sections for cupcakes.</li>
          <li>- Have a section on the landing page for reviews.</li>
        </ul>
      </section>

      <section className="pains">
        <h2>Pain Points</h2>
        <p>I conducted several user interviews to understand key user needs and pain points.</p>
        <ul>
          <li>- Confusing navigation bar.</li>
          <li>- They struggled to fide where are the cupcakes to place the order.</li>
          <li>- The page redirected the user to the cart before finishing shopping.</li>
          <li>- They couldn’t fine the cart, it was hidden in the hamburger menu.</li>
          <li>- The cart page was a bit confusing, users were not sure what to do next.</li>
          <li>- Checkout page too long.</li>
          <li>- Some users wanted to know about the cupcake ingredients.</li>
          <li>- Easy access to cart.</li>
        </ul>
      </section>
      </div>

      <div className="row-container">
      <section className="personas1">
        <h2>Personas</h2>
        <img src="/PersonaToronto.png" alt="Persona" />
      </section>
      <section className="personas2">
        <h2>Personas</h2>
        <img src="/PersonaToronto2.png" alt="Persona" />
      </section>
      </div>

      <section className="user-journey">
        <h2>User Journey</h2>
      </section>

      <section className="wireframes">
        <h2>Wireframes</h2>
        <p>Showcase wireframes with explanations...</p>
        <img src="/wireframes.png" alt="Wireframe" />
      </section>

      <section className="ui-design">
        <h2>UI Design</h2>
        <p>Explain your UI design decisions...</p>
        <img src="/torontocupcake.png" alt="UI Design" />
      </section>

      <section className="next-steps">
        <h2>Next Steps</h2>
        <ul>
          <li>Step 1: Improve the prototype...</li>
          <li>Step 2: Conduct usability testing...</li>
        </ul>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
