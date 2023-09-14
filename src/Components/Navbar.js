import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from './Assets/Images/logo.svg';
import logo from "./Assets/Images/logo.png"
import twitter from "./Assets/Images/twitter.svg";
import github from "./Assets/Images/github.svg";
import linkedin from "./Assets/Images/linkedin.svg";



function NavBar() {
  const [activeLink, setActiveLink] = React.useState('home');
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
  const onscroll = () => {
    if(window.scrollY > 50) {
      setScrolled(true) ;
    } else { 
      setScrolled(false);
    }
} 
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener('scroll', onscroll);
  },[]);

   const onUpdateActiveLink = (value) => {
      return setActiveLink(value);
   }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
         <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" 
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
             onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"
            className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text' >
            <div className='social-icon'>
              <a href="https://twitter.com/jimohThompson"> <img src={twitter} alt='logo' /> </a>
              <a href="https://github.com/JimohSegun"> <img src={github} alt='logo' /> </a>
              <a href="https://www.linkedin.com/in/segun-jimoh/"> <img src={linkedin} alt='logo' /> </a>
            </div>
            <button className='vvd' onClick={() => {console.log("connect")}}><span>Let's connect</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;