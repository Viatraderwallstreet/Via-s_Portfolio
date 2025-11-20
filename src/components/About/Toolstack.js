import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiAnaconda, 
  SiRstudio,
  SiGithub,
  SiMicrosoftoffice,
} from "react-icons/si";
import { FaMicroscope, FaClipboardCheck, FaChartLine } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development & Analysis Tools */}
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda fontSize={"50px"} />
        <div className="tech-icons-text">Jupyter / NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio fontSize={"50px"} />
        <div className="tech-icons-text">RStudio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine fontSize={"50px"} />
        <div className="tech-icons-text">GraphPad Prism</div>
      </Col>
      
      {/* Clinical & Regulatory Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <FaClipboardCheck fontSize={"50px"} />
        <div className="tech-icons-text">GCP / eCRF</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice fontSize={"50px"} />
        <div className="tech-icons-text">MS Office 365</div>
      </Col>

      {/* Lab Equipment & Biosafety */}
      <Col xs={4} md={2} className="tech-icons">
        <FaMicroscope fontSize={"50px"} />
        <div className="tech-icons-text">Lab Equipment</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdBiotech fontSize={"50px"} />
        <div className="tech-icons-text">Biosafety P2/P3</div>
      </Col>
      
      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"50px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      
      {/* Operating System */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">macOS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
