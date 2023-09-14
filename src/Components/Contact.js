import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import contactImage from "./Assets/Images/contact-img.svg";

const Contact = () => {

    const formInitialDetails = {
        firstname:"",
        lastname: "",
         email: "",
        phone :"",
        message :"",
    };

    const [formDetails , setFormDetails] = React.useState(formInitialDetails);
    const  [buttonText, setButtonText]  = useState('send');
    const [status, setStatus] = useState({});

   const onFormUpdate = (name, value)  => {
    setFormDetails(
         {...formDetails, [name] : value }
    )
   };

   const handleSubmit = async (e) => {
    e.preventDefault ();
    setButtonText("Sending...");
     let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send")
    let result = response.json();
    setFormDetails(formInitialDetails);
    if(result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully'});
    }else {
        setStatus ({ success: false, message: 'Something went wrong, please try again later' })
    }

   };



    return(
         <section id="contact" className="contact ">
            <Container>
                <Row className="align-items-center ">
                    <Col md={6}>
                          <img src={contactImage} alt="Contact us" />
                    </Col>
                    <Col md={6}>
                   <h2>Get In touch</h2>
                 <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input   type="text"
                               name="firstname"
                               value={formDetails.firstName} 
                               placeholder="First Name" onChange={(e) => 
                               onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input   type="text" 
                               name="last name"
                               value={formDetails.lasttName} 
                               placeholder="Last Name" 
                               onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input   type="email" 
                               name="email"
                               value={formDetails.email} 
                               placeholder="Email Address" 
                               onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input   type="tel" 
                               name="tel"
                               value={formDetails.phone} 
                               placeholder="Phone No." 
                               onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" 
                                name="message"
                                value={formDetails.message}  
                                placeholder="Message" 
                                onChange={(e) => onFormUpdate('message', e.target.value)} />

                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
                   

                    </Col>
                </Row>
            </Container>
         </section>

    )
}

export default Contact ;








