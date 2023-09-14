import React from "react";
import {MailchimpForm} from "./MailchimpForm";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logo from "./Assets/Images/logo.png"
import twitter from "./Assets/Images/twitter.svg";
import github from "./Assets/Images/github.svg";
import linkedin from "./Assets/Images/linkedin.svg";



const Footer = () => {
   const currentYear = new Date().getFullYear();

  return(
    <footer className="footer">
          <Container>
        <Row className="align-items-center">
            <MailchimpForm  className="footer-image"/>
            <Col sm={6} >
             <div className="text-center text-md-start"> <img src={logo} alt="logo" /> </div>
                
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                 <div className="social-icon">
             <a href="https://twitter.com/jimohThompson"> 
             <img src={twitter} alt="Icon" /> 
             </a>
             <a href="https://github.com/JimohSegun">
               <img src={github} alt="Icon" /> 
             </a>
             <a href="https://www.linkedin.com/in/segun-jimoh/">
             <img src={linkedin} alt="Icon" /> 
             </a>
                 </div>
                 <p>CopyRight {currentYear}, All Right Reserved</p>
            </Col>
        </Row>
    </Container>
    </footer>
   
  )

}

export default Footer ;