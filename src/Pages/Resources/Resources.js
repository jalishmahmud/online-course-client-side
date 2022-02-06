import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import authorImg from "../../images/anwar-instructor.jpg";
import pdfBG from "../../images/pdf-img.jpg";
import Navigation from "../Shared/Navigation/Navigation";
import "./Resources.css";
const Resources = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="resources-wrapper">
        <div className="page-title">
          <h1 className="text-light">Resources</h1>
        </div>
        <Container className="mt-5">
          <Row>
            <Col md={6} xs={12}>
              <div className="single-card m-3">
                <img className="img-fluid" src={authorImg} alt="" />

                <div className="card-content ps-4">
                  <h3>Curriculum Vitae of ANWAR H. JOARDER</h3>
                  <div className="author-info">
                    <p>
                      Researched by:{" "}
                      <Link className="author-link" to="">
                        ANWAR H. JOARDER
                      </Link>{" "}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/11HqLsxEuRrDMq6UYsNxI7S2CsUv6loBp/view?usp=sharing"
                    className="custom-lg-link-btn download"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="single-card m-3">
                <img className="img-fluid" src={pdfBG} alt="" />
                <div className="card-content ps-4">
                  <h3>Independence in Probability: Swimming and Biking</h3>
                  <div className="author-info">
                    <p>
                      Researched by:{" "}
                      <Link className="author-link" to="">
                        ANWAR H. JOARDER
                      </Link>{" "}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1rDoy9Z-6-biGwt8a250mL1ZoO8hlCb_8/view?usp=sharing"
                    className="custom-lg-link-btn download"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="single-card d-flex m-3">
                <img className="img-fluid" src={pdfBG} alt="" />
                <div className="card-content ps-4">
                  <h3>Variance of a Few Observations</h3>
                  <div className="author-info">
                    <p>
                      Researched by:{" "}
                      <Link className="author-link" to="">
                        ANWAR H. JOARDER
                      </Link>{" "}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1taOBlmim4Lxi2fqffjrHdiSA88JsFsD2/view?usp=sharing"
                    className="custom-lg-link-btn download"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Resources;
