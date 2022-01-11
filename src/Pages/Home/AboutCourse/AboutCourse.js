import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutCourseImg from "../../../images/statistic.jpg";
import "./AboutCourse.css";
const AboutCourse = () => {
  return (
    <div className="about-course py-5 text-light">
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={4}>
            <img className="img-fluid rounded" src={aboutCourseImg} alt="" />
          </Col>
          <Col className="about-text" sm={12} md={8}>
            <h2>About This Course</h2>
            <div className="custom-line"></div>
            <p>
              If you are a student enrolled in BS Program in any engineering
              area, say, Computer Science and Engineering, Mechanical
              Engineering, Industrial and Production Engineering, Civil and
              Environmental Engineering, Systems Engineering, Electrical and
              Electronics Engineering, you certainly need to learn engineering
              statistics.  Here am I to facilitate you. If you have any question
              in statistics, I have an answer for you. I can motivate you, help
              you understand the uncertainty in engineering issues and gradually
              develop you through computer packages as a decision maker.
            </p>
            <p>
              I have 30 years’ experience teaching statistics and mathematics at
              various world renowned universities. In particular, I taught
              engineering statistics about 85 times.
            </p>
            <p>
              I invite you to join my free webinar on popular topics in
              statistics and mathematics. I am sure learning the subject with me
              will be an enjoyable and exciting experience for you, rewarding
              lifelong.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutCourse;
