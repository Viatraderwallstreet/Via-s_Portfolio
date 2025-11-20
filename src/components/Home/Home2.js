import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Bioengineering graduate from EPFL with over 3 years of practical experience 
              across research labs and clinical settings. My training bridges biology, engineering, 
              and data analysis — with a strong focus on translational research and diagnostics.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, R, CRISPR, Cell Culture, and Molecular Biology{" "}
                </b>
              </i>
              — and I have hands-on experience with tumor microenvironment research, ECMO clinical studies,
              and GCP-aligned protocols in real-world healthcare settings.
              <br />
              <br />
              My areas of expertise include
              <i>
                <b className="purple">
                  {" "}
                  Molecular & Cellular Engineering, Translational Research, Medical Devices,{" "}
                </b>
              </i>
              and regulatory affairs. I thrive in multidisciplinary teams and am driven by projects 
              with real-world impact in healthcare.
              <br />
              <br />
              Beyond the lab, I'm a dedicated athlete with a background in
              <b className="purple"> high-level road cycling</b>, triathlons, and mountaineering,
              bringing the same discipline and precision to both my scientific pursuits and athletic endeavors.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
