import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Your project images (make sure these files exist)
import msln from "../../Assets/Projects/msln.jpg";
import constam from "../../Assets/Projects/TME.jpg";
import drosophila from "../../Assets/Projects/drosophila.jpg";
import anesthesio from "../../Assets/Projects/AnesthIO.jpg";
import wikispeedia from "../../Assets/Projects/ADA.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Research & Projects </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of my key research projects in bioengineering, bioinformatics, and translational medicine.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Master Thesis – Bispecific SNAP-tag Antibodies */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={msln}
              isBlog={false}
              title="Bispecific SNAP-tag Antibodies for Cervical Cancer"
              subtitle="Master Thesis – Barth Lab, University of Cape Town, South Africa"
              description="Designed and produced modular bispecific scFv–SNAP constructs targeting mesothelin and EGFR to address antigen heterogeneity and mesothelin shedding. Integrated TCGA mRNA + RPPA analysis to identify an MSLN-low subtype enriched in EGFR, NOTCH1, FN1 and actionable biomarkers."
              ghLink="/docs/Master_Thesis_VB_final_version.pdf"
              demoLink=""
            />
          </Col>

          {/* Constam Lab – Activin-A, Perlecan and STING in Melanoma */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={constam}
              isBlog={false}
              title="Activin-A, Perlecan & STING Signaling in Melanoma"
              subtitle="Semester project / Research Assistant – Constam Lab, EPFL"
              description="Explored how Activin-A modifies melanoma progression by modulating STING immune signaling, pericyte coverage, and angiogenesis. Combined Western blot, immunofluorescence on cryosections/FFPE, and a developing 3D co-culture ECM model to study tumor–stroma interactions."
              ghLink="/docs/Report_Lab_immersion_Constam.pdf"
              demoLink=""
            />
          </Col>

          {/* Drosophila Serine Proteases & Lectins */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drosophila}
              isBlog={false}
              title="Serine Protease & Lectin Clusters in Drosophila Immunity"
              subtitle="Semester project – Lemaitre Lab, EPFL"
              description="Characterized the immune function of two serine-protease clusters (cSP42, CG9733/37) and one lectin cluster (CG9976-78) involved in Toll pathway regulation, melanization, and pathogen recognition. Conducted null-mutant phenotyping with injury, infection and melanization assays."
              ghLink="/docs/UPLEM_labimmersion.pdf"
              demoLink=""
            />
          </Col>

          {/* Anesthesio.AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anesthesio}
              isBlog={false}
              title="Anesthesio.AI – AI Dashboard for Anesthesiology Training"
              subtitle="AI x Healthcare – Personal Project (GitHub link on request)"
              description="Built a full-stack prototype using React/Next.js, Whisper API and GPT integration to convert voice notes from anesthesiology residents into structured case summaries, complication tracking, and performance dashboards."
              ghLink=""
              demoLink="/screenshots/anesthesio/index.html"
            />
          </Col>

          {/* Wikispeedia – Political Bias Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikispeedia}
              isBlog={false}
              title="Wikispeedia Bias – NLP & Graph Analysis"
              subtitle="EPFL ADA Project – Political Navigation Bias"
              description="Analysed political bias and click-path patterns on the Wikispeedia dataset using NLP, embeddings and SVM classifiers. Explored how user navigation behavior reflects cultural associations between political concepts."
              ghLink="https://github.com/wassimmaj/team_MiaouMiaou"
              demoLink="https://wassimmaj.github.io/team_MiaouMiaou/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

