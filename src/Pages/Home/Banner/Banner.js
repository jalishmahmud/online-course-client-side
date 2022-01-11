import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner py-5">
      <Container>
        <Row className="py-3">
          <Col sm={12}>
            <h5>ANWAR H. JOARDER’S</h5>
            <h1>
              Online Engineering
              <br />
              Statistics Course
              <br /> <span>for BS Level Engineering Students</span>
            </h1>
            <p>
              Students enrolled in BS Program in Computer Science and
              Engineering,
              <br /> Mechanical Engineering, Industrial and Production
              Engineering,
              <br /> Civil and Environmental Engineering, Systems Engineering,
              Electrical Engineering etc.
            </p>
            <Row>
              <Col sm={12} md={8}>
                <Link to="/" className="custom-lg-btn">
                  Course Outline
                </Link>
                <Link to="/" className="custom-lg-btn">
                  About Instructor
                </Link>
              </Col>
              <Col sm={12} md={4}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
