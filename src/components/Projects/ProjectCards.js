import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsFileEarmarkText, BsGithub, BsImages } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {/* Subtitle */}
        {props.subtitle && (
          <h6 style={{ color: "rgb(150,150,150)", marginTop: "-5px", marginBottom: "10px" }}>
            {props.subtitle}
          </h6>
        )}

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

         {/* GitHub / PDF link */}
         {props.ghLink && (
           <Button variant="primary" href={props.ghLink} target="_blank">
             {props.ghLink.includes('github.com') ? (
               <><BsGithub /> &nbsp; GitHub</>
             ) : (
               <><BsFileEarmarkText /> &nbsp; Read Report</>
             )}
           </Button>
         )}
         {" "}
         {/* Demo/Website link */}
         {!props.isBlog && props.demoLink && (
           <Button
             variant="primary"
             href={props.demoLink}
             target="_blank"
             style={{ marginLeft: "10px" }}
           >
             <CgWebsite /> &nbsp;
             {props.demoLink.includes('/screenshots/') || props.demoLink.includes('/videos/') 
               ? 'Demo' 
               : 'Website'}
           </Button>
         )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

