import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Viacheslav Bolotnikov</span>{" "}
            from <span className="purple">Lausanne, Switzerland</span>.
            <br />
            I recently completed my{" "}
            <span className="purple">Master of Science in Life Sciences Engineering</span> at{" "}
            <span className="purple">EPFL (École Polytechnique Fédérale de Lausanne)</span>,
            where I specialized in bioengineering and bioinformatics.
            <br />
            My most recent role was as a{" "}
            <span className="purple">Research Assistant</span>,
            and I'm currently exploring exciting opportunities in pharmaceutical research,
            clinical development, and potentially pursuing a PhD.
            <br />
            <br />
            Outside of the lab, I'm passionate about activities that challenge both
            body and mind:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> High-Level Road Cycling 🚴
            </li>
            <li className="about-activity">
              <ImPointRight /> Triathlons & Mountaineering 🏔️
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Drums 🥁
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Discovering New Cuisines 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Discipline in the lab, determination on the road — where science meets endurance, innovation thrives."{" "}
          </p>
          <footer className="blockquote-footer">Viacheslav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
