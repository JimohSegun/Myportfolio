import React from "react";
import Col from "react-bootstrap/esm/Col";

const ProjectCard = ({title, description, imgUrl}) => {
  return(
    <Col sm={6} lg={4}>
        <div className="proj-imgbx mx-3 mx-md-0">
            <img src={imgUrl} alt="project" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span >{description}</span>
            </div>

        </div>
    </Col>
  )

}

export default ProjectCard;