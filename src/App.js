import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';





function App() {
  return (
          <div class="bg">
        
         <NavBar /> 
         <Banner /> 
         <Skills />
         <Project />
         <Contact />
          <Footer />
          </div>

  ); 
};

export default App;
