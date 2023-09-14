import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "./Assets/Images/meter1.svg";
import meter2 from "./Assets/Images/meter2.svg";
import meter3 from "./Assets/Images/meter3.svg";
import colorSharp from "./Assets/Images/color-sharp.png"
import TrackVisibility from "react-on-screen";
import 'animate.css';


function Skills() {
const responsive = {
  superLargeDesktop: {
    
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    return(
<div>
    <selection className="skill" id="skills" >
          <Container>
            <Row>
                <Col >
                <div className="skill-bx">
                  <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : null}>
                    <h2>
                      Skills
                    </h2>
                    <p>Excellent understanding of server-side CSS. Proficiency in HTML, CSS, JavaScript, and React. Experience in 
                      working with graphic design applications (for example, Adobe Illustrator and figma). Experience in creating 
                      responsive applications and adaptive web designs.
                    </p> 
                  </div> }
              </TrackVisibility>  
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="image" />
                            <h5>HTML</h5>
                        </div>
                         <div className="item">
                            <img src={meter2} alt="image" />
                            <h5>CSS</h5>
                        </div>
                         <div className="item">
                            <img src={meter1} alt="image" />
                            <h5>JavaScript</h5>
                        </div>
                         <div className="item">
                            <img src={meter3} alt="image" />
                            <h5>React.js</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="image" />
                            <h5>Figma</h5>
                        </div>
                         <div className="item">
                            <img src={meter3} alt="image" />
                            <h5>UI/UX</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="image" />
                            <h5>Version Control</h5>
                        </div>
                         <div className="item">
                            <img src={meter3} alt="image" />
                            <h5>Rest APis</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="image" />
                            <h5>Unit Testing</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
          <img src={colorSharp} alt="imagesharp" className="background-image-left"/>
    </selection>;
          
</div>
    );
};


export default Skills;