import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Me enamoré de la programación y al menos he aprendido algo, creo...  🤷‍♂️
              <br />
              <br />Domino clásicos como
              <i>
                <b className="purple"> Python y Javascript</b>
              </i>
              <br />
              <br />
              Mi campo de interés es la construcción de     &nbsp;
              <i>
                <b className="purple">nuevas tecnologías y productos web</b> y
                también en áreas relacionadas con{" "}
                <b className="purple">
                  IA y Data Science
                </b>
              </i>
              <br />
              <br />
              Siempre que sea posible, también aplico mi pasión por desarrollar 
              productos con 
              <b className="purple"> Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Librerias y Frameworks de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRÁS EN</h1>
            <p>
              Sentite libre de <span className="purple">contactarme</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/brunocami"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brunocami/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
