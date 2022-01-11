import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="py-5 get-in-touch">
      <Row>
        <Col className="d-flex justify-content-center" sm={12} md={6}>
          <div>
            <h2>Get In Touch</h2>
            <div className="custom-line"></div>
          </div>
        </Col>
        <Col className="custom-form-bg py-5" sm={12} md={6}>
          <form className="custom-form" onSubmit="">
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder="Your Email" />
            <br />
            <textarea placeholder="Your Message"></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default GetInTouch;
