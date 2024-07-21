import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Added import statement for Home component
import About from './components/About'; // Added import statement for About component
import Certification from './components/Certification'; // Added import statement for Certification component
import Project from './components/Project'; // Added import statement for Project component
import Contact from './components/Contact'; // Added import statement for Contact component
import Skill from './components/Skill';
import Experience from './components/Experience';

const App = () => { 
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Experience/> */}
      <Skill/>
      <Certification />
      <Project />
      <Contact />
    </>
  );
}

export default App;
