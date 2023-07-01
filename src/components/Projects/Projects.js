import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import news from "../../Assets/Projects/oneminutenews.png";
import Travel from "../../Assets/Projects/travel.png";
import QuizMaker from "../../Assets/Projects/QuizMaker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Algunos de mis ultimos <strong className="purple">Proyectos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="OneMinuteNews"
              description="Blog de noticias que consume noticias de una api llamada Medistack y usa la api de openai para crear un resumen de la noticia seleccionada. El front end esta desarrollado con ReactJs y el back end esta hecho con python y Flask"
              ghLink="https://github.com/brunocami/news_portal_frontend"
              demoLink="http://oneminutenews.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travel}
              isBlog={false}
              title="Travel"
              description="Web de Turismo hecha con React.js que muestra destinos de viajes y contiene un fomrulario para la creacion de usarios con todos los metodos de verificacion necesarios"
              ghLink="https://github.com/brunocami/travel_planner"
              demoLink="https://brunocami.github.io/travel_planner/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizMaker}
              isBlog={false}
              title="Quiz Maker"
              description="Pequeño projecto para crear un quiz de preguntas multiple choice con diferentes dificultades y temas. Hechp con React.js y conusme una api que proporciona las preguntas y respuestas necesarias"
              ghLink="https://github.com/brunocami/quiz"
              demoLink="https://brunocami.github.io/quiz/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
