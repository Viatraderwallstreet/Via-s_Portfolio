import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiR, 
  SiJupyter,
  SiLatex,
  SiMicrosoftexcel,
  SiArduino,
} from "react-icons/si";
import { TbDna, TbDna2 } from "react-icons/tb";
import { GiMicroscope, GiChemicalDrop } from "react-icons/gi";
import { BiTestTube } from "react-icons/bi";
import { FaFlask } from "react-icons/fa";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import C from "../../Assets/TechIcons/C++.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming & Data Analysis */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR fontSize={"50px"} />
        <div className="tech-icons-text">R / Prism</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel fontSize={"50px"} />
        <div className="tech-icons-text">Excel / CRF</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++ / Matlab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino fontSize={"50px"} />
        <div className="tech-icons-text">Arduino</div>
      </Col>
      
      {/* Molecular Biology Techniques */}
      <Col xs={4} md={2} className="tech-icons">
        <TbDna2 fontSize={"50px"} />
        <div className="tech-icons-text">CRISPR</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbDna fontSize={"50px"} />
        <div className="tech-icons-text">PCR / RT-qPCR</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFlask fontSize={"50px"} />
        <div className="tech-icons-text">Cell Culture</div>
      </Col>
      
      {/* Lab Techniques */}
      <Col xs={4} md={2} className="tech-icons">
        <GiMicroscope fontSize={"50px"} />
        <div className="tech-icons-text">Microscopy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiTestTube fontSize={"50px"} />
        <div className="tech-icons-text">Western Blot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiChemicalDrop fontSize={"50px"} />
        <div className="tech-icons-text">ELISA / FACS</div>
      </Col>

      {/* Version Control & Documentation */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
