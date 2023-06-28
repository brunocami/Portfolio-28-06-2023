import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Como <span className="purple">desarrollador web full stack</span>, mi mayor motivación es crear
            soluciones tecnológicas innovadoras que mejoren la vida de las
            personas. Con un año de experiencia en Reachout, he colaborado
            en proyectos full stack y he desarrollado mis habilidades en desarrollo front end.<br /> Además, gracias a mi formación en diseño industrial,
            tengo una perspectiva única para abordar los desafíos de la tecnología y el diseño. Si me eligen, pueden esperar un enfoque creativo
            y orientado a resultados para cualquier proyecto que aborde.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
