import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import "./SingleCourse.css";
import sscMathCourse from "../../../images/ssc-math-course.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import anwarInstructor from "../../../images/anwar-instructor.jpg";
const SingleCourse = () => {
  const clock = <FontAwesomeIcon icon={faClock} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;
  return (
    <div className="single-courses">
      <Container>
        <Row>
          <Col sm={12} md={7}>
            <div className="course-content mt-5 mb-4 border-bottom">
              <h2 className="pb-3">
                Online Engineering Statistics Course for BS Level Students
              </h2>
              <p>
                <span>
                  <i>{clock}</i> 34 hours
                </span>
                <span>
                  <i>{globe}</i> Live online class via Zoom
                </span>
              </p>
            </div>
            <div className="instructor-info d-flex align-items-center border-bottom pb-4">
              <img
                className="img-fluid rounded-circle"
                src={anwarInstructor}
                alt=""
              />
              <div className="instructor-name">
                <h4>ANWAR H. JOARDER’S</h4>
                <h6>
                  M.Sc. and PhD degrees in statistics from the University of
                  Western Ontario, Canada
                </h6>
              </div>
            </div>
            <div className="course-description py-4">
              <h4 className="mb-3">Course Description</h4>
              <p>
                Students enrolled in BS Program in Computer Science and
                Engineering, Mechanical Engineering, Industrial and Production
                Engineering, Civil and Environmental Engineering, Systems
                Engineering, Electrical Engineering etc.
              </p>
            </div>
            <div className="course-content py-4">
              <h4 className="mb-3">Course Content</h4>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. Introduction </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>1.1 Probability and Statistics </li>
                      <li>1.2 Roadmap of the Course</li>
                      <li>1.3 Data Type</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. Elementary Probability</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>2.1 Sample Space and Events</li>
                      <li>2.2 Union and Intersection of Events</li>
                      <li>2.3 Axioms of Probability</li>
                      <li>2.4 Additive Rule of Probability</li>
                      <li>2.5 Multiplicative Rule of Probability</li>
                      <li>2.6 Joint, Marginal and Conditional Probability</li>
                      <li>
                        2.7 Probabilistic Independence 2.8 Bayes’ Theorem of
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    3. Discrete Random Variable (DRV)
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>3.1 Definition</li>
                      <li>3.2 Probability Mass Function (PMF)</li>
                      <li>3.3 Cumulative Probability Function of a DRV</li>
                      <li>
                        3.4 Moments of a DRV 3.5 Moment Generating Function of a
                        DRV
                      </li>
                      <li>3.5 Characteristic Function of a DRV</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. Popular Discrete Random variables
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>4.1 Hypergeometric Random Variable</li>
                      <li>4.2 Binomial Random Variable</li>
                      <li>4.3 Geometric Random Variable</li>
                      <li>4.4 Negative Binomial Random Variable</li>
                      <li>4.5 Poisson Random Variable</li>
                      <li>4.6 Multinomial Distribution</li>
                      <li>4.7 Appendix for Computer Packages</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <div className="course-sidebar rounded p-4 my-5 shadow">
              <img className="img-fluid rounded" src={sscMathCourse} alt="" />
              <p className="my-4 border-bottom pb-4">
                <span className="course-price">Price: $500.00</span>
                <span>
                  <button className="custom-enroll-btn">Enroll Now</button>
                </span>
              </p>
              <div>
                <h4>Requirements</h4>
                <ul>
                  <li>Stable Internet connection</li>
                  <li>Mobile/Tablet or computer</li>
                </ul>
              </div>
              <div>
                <h4>Material Includes</h4>
                <ul>
                  <li>Delivery method will be online over the Zoom</li>
                  <li>Lecture details and outline</li>
                  <li>PDF will be provided</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleCourse;
