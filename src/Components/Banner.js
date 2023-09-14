import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from './Assets/Images/header-img.svg'



function Banner(){
    const [loopNum, setLoopNum] =useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer" ,"Web Designer", "UI/UX Designer"];
    const [text, setText] = React.useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    React.useEffect(() => {
        let ticker = setInterval(() => {
            tick ();
        }, delta) 
        return () => { clearInterval (ticker)}
    })
     
     const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i] ;
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
             setIsDeleting(true);
             setDelta(period);
        }  else if (isDeleting && updatedText === '') {
            setIsDeleting (false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }

     }


    return(
        <div>
         <section className="banner" id="home">
          <Container>
            <Row className='align-item-center justify-content-center'>
              <Col xs={12} md={6} xl={7}>
              
                 <span className="tagline">Welcome to my Portfolio</span>
                 <h1 className="txt-rotate">{`Hi I'm Jimoh Segun `}<span className="wrap">{text}</span> </h1>
                 <p>
                    Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for 
                    customers with various business objectives. Judicious and creative when crafting effective websites, apps and 
                    platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem 
                    solver with calm and focused demeanor.
                </p>
                 <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
              </Col>
              <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header img" className="banana-image w-100"/>
               
              </Col>
            </Row>
          </Container>
         </section>
        </div>
    )
}
export default Banner;