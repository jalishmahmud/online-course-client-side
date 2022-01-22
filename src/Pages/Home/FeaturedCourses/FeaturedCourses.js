import { faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import anwarInstructor from "../../../images/anwar-instructor.jpg";
import sscMathCourse from "../../../images/ssc-math-course.jpg";
import statisticCourse from "../../../images/statistic-course.jpg";
import "./FeaturedCourses.css";
const FeaturedCourses = () => {
  const clock = <FontAwesomeIcon icon={faClock} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;
  return (
    <div id="course" className="featured-courses pt-5">
      <Container>
        <Row className="pt-5">
          <Col
            className="d-flex justify-content-center flex-column align-items-center"
            sm={12}
            md={4}
          >
            <h2>My Courses</h2>
            <div className="custom-line"></div>
            <img
              className="img-fluid rounded-circle instructor-image"
              src={anwarInstructor}
              alt=""
            />
            <Link to="/" className="custom-lg-btn webinar">
              Join Free Webinar
            </Link>
          </Col>
          <Col className="single-course mb-4" sm={12} md={4}>
            <img className="img-fluid rounded" src={statisticCourse} alt="" />
            <h3>Online Engineering Statistics Course for BS Level Students</h3>
            <p>
              <span>
                <i>{clock}</i> 34 hours
              </span>
              <span>
                <i>{globe}</i> Live online class
              </span>
            </p>
            <Link to="/courses/singleCourse" className="custom-lg-link-btn">
              Course Details
            </Link>
          </Col>
          <Col className="single-course mb-4" sm={12} md={4}>
            <img className="img-fluid rounded" src={sscMathCourse} alt="" />
            <h3>General mathematics for class 9 and class 10 students</h3>
            <p>
              <span>
                <i>{clock}</i> 44 hours
              </span>
              <span>
                <i>{globe}</i> Live online class
              </span>
            </p>
            <button className="custom-lg-btn disabled" disabled>
              Coming Soon!
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
