import React from "react";
import Data from "./Data";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./projectCard";
import colorSharp2 from "./Assets/Images/color-sharp2.png"
import TrackVisibility from "react-on-screen";
import 'animate.css';


function Project() {
  const [data] = React.useState(Data)
 
    return(
        <section className="project" id="project" >
         <Container>
            <Row>
                <Col>
                 <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__bounceInDown" : null}>

                 <h2>Projects</h2>
                 <p>Implemented web performance optimizations, and ensured web pages conformed to accessibility standard. 
                </p>
                </div> }
                 </TrackVisibility>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className=" nav-pills mb-5 justify-content-center align-items-center">
            <Nav.Item>
              <Nav.Link eventKey="first" >Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab Three</Nav.Link>
            </Nav.Item>
          </Nav>
        
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                  {data.map((project, index) => {
                return (
                <ProjectCard key={index} {...project} />
                )
              })}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second"> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident 
                velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis 
                 asperiores delectus quasi inventore debitis quo.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="third">  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident 
               velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis 
                asperiores delectus quasi inventore debitis quo.</p>
            </Tab.Pane>
          </Tab.Content> 
   
      </Tab.Container>
                           
                </Col>
            </Row>
         </Container>
         <img src={colorSharp2} alt="imagesharp" className="background-image-right"/>
        </section>
    );
};

export default Project;