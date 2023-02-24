import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row >
          <Col size={12} md={6}>
            <img
              className={"animate__animated animate__zoomIn"}
              src={contactImg}
              alt="Contact Us"
            />
          </Col>
          <Col size={12} md={6} className="d-flex justify-content-center">
            <div className="contact-text">
              <h2>Get In Touch</h2>
              <div>
                <span>Name: Chau Van Chung</span>
              </div>
              <div>
                <span>Email: chungchau92@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
