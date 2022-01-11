import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-math-data.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer pt-5">
      <Container>
        <Row className="footer-content pt-3">
          <Col className="py-4" xs={12} md={3}>
            <h4>About JM Courier</h4>
            <img className="mb-3 img-fluid" src={logo} alt="" />
            <p>
              Encounter the most bewitching wines around the world with a
              knowledgeable wine sommelier to experience the sublime with just a
              sip. Relish from the most
            </p>
          </Col>

          <Col className="py-4" xs={12} md={3}>
            <h4>Popular Services</h4>
            <span>Data Science</span>
            <span>SSC Math</span>
            <span>HSC Higher Math</span>
            <span>BS Statistic</span>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="/">Help And FAQs</Link>
              </li>
              <li>
                <Link to="/">Refund Policy</Link>
              </li>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Contact Info</h4>
            <h6>ADDRESS:</h6>
            <p>81A Haldon St, Lakemba, NSW 2195, Australia</p>

            <h6>PHONE:</h6>
            <p>1300 989 327</p>

            <h6>EMAIL:</h6>
            <p>contact@mathdatasci.com</p>

            <h6>WORKING DAYS/HOURS:</h6>
            <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
          </Col>
        </Row>
        <Row className="copyright">
          <p className="py-3 text-center">
            Copyright &copy; MathDataSci.com, All Rights Reserved. Developed By{" "}
            <a href="https://portfolio-of-jalish.netlify.app/">Jalish Mahmud</a>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
