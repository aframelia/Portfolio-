// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/nav/Nav'
// import Header from './components/header/Header'
// import About from './components/about/About'
// import Myprojects from './components/myprojects/Myprojects'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'


// const App = () => {
//   return (
    
//     <main className="text-gray-400 bg-gray-900 body-font">
//         <Nav/>
//         <Header/>
//         <About/>
//         <Myprojects/>
//         {/* <Contact/> */}
//         {/* <Footer/> */}
//     </main>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project1 from './pages/Project1'; // Make sure this path is correct
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Home from './pages/Home'; // If you have a homepage
import About from './components/about/About';
import MyProjects from './components/myprojects/Myprojects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/about" component={About} />
        <Route path="/myprojects" component={MyProjects} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
