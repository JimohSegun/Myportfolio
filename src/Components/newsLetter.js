import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from 'react-bootstrap/Alert';



const Newsletter = ({onValidated, status, message }) => {

  const [email, setEmail] = useState('');


 React.useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])  


    const handleSubmit = (e) => {
    e.preventDefault();
    // check if email has entered for subscriber
    email && email.indexOf("@") > -1 &&    
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }


return (
    <Col lg={12}>
        <div className="newsletter-bx">
          <Row>
           <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === 'sending' && <Alert>sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
           </Col>

            <Col md={6} xl={7}>
             <form onSubmit={handleSubmit}>
               <div className="new-email-bx my-sm-3 ">
                <input 
                      value={email} 
                      type="email" 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
             </form>
            </Col>
          </Row>
        </div>

    </Col>
)

}

export default Newsletter;