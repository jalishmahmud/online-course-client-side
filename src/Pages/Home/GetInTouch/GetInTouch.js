import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./GetInTouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
  const envelope = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <div className="py-5 get-in-touch">
      <Container className="container-fluid">
        <Row>
          <Col sm={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <div className="custom-line"></div>
              <div className="text-light">
                <p>
                  <i>{phoneIcon} </i>(02) 9497-5058
                </p>
                <p>
                  <i>{envelope}</i> contact@mathdatasci.com
                </p>
              </div>
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
      </Container>
    </div>
  );
};

export default GetInTouch;
