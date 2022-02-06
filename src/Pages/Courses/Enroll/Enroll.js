import { faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import sscMathCourse from "../../../images/ssc-math-course.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Enroll.css";
const Enroll = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = new Date().toLocaleDateString();
    data.time = new Date().toLocaleTimeString();
    data.email = user.email;
    data.paymentStatus = "Pending";
    data.enrollStatus = "enrolled";
    data.courseName =
      "Online Engineering Statistics Course for BS Level Students";
    data.price = "$500";
    data.instructor = "ANWAR H. JOARDER";
    fetch("https://afternoon-meadow-62966.herokuapp.com/enroll", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsSuccess(true);
          reset();
        }
      });
  };
  const clock = <FontAwesomeIcon icon={faClock} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;
  return (
    <div className="single-courses">
      <>
        <Navigation></Navigation>
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
              <div>
                <form
                  className="enrollment-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h4 className="input-group-title pb-2 mb-4 border-bottom">
                    Enroll Now:
                  </h4>
                  <Row>
                    <Col xs={12} md={6}>
                      <h6 className="input-field-title">Your Name</h6>
                      <input
                        className="input-field"
                        value={user.displayName}
                        {...register("name", { required: true })}
                      />
                      {errors.name && <span>This field is required</span>}
                    </Col>
                    <Col xs={12} md={6}>
                      <h6 className="input-field-title">Your Email</h6>
                      <input
                        className="input-field"
                        value={user.email}
                        type="email"
                        {...register("studentEmail", { required: true })}
                      />
                      {errors.email && <span>This field is required</span>}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <h6 className="input-field-title">Mobile Number</h6>
                      <input
                        className="input-field"
                        placeholder="Mobile Number"
                        {...register("mobile", { required: true })}
                      />
                      {errors.mobile && <span>This field is required</span>}
                    </Col>
                    <Col xs={12} md={6}>
                      <h6 className="input-field-title">Country</h6>
                      <input
                        className="input-field"
                        placeholder="Country Name"
                        type="text"
                        {...register("country", { required: true })}
                      />
                      {errors.country && <span>This field is required</span>}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <h6 className="input-field-title">Select Class Time</h6>
                      <select
                        className="input-field"
                        {...register("classTime", { required: true })}
                      >
                        <option value="7pm- 9pm Sun-Sat-Mon">
                          7pm- 9pm Sun-Sat-Mon
                        </option>
                        <option value="10pm- 11:30pm Mon-Wed-Thu">
                          10pm- 11:30pm Mon-Wed-Thu
                        </option>
                        <option value="12pm- 2pm Thu-Mon-Sat">
                          12pm- 2pm Thu-Mon-Sat
                        </option>
                      </select>
                      {errors.classTime && <span>This field is required</span>}
                    </Col>
                    <Col xs={12} md={6}>
                      <h6 className="input-field-title">
                        Select Payment Method
                      </h6>
                      <select
                        className="input-field"
                        {...register("paymentMethod", { required: true })}
                      >
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Cash - in office">
                          Cash - in office
                        </option>
                        <option value="Cheque">Cheque</option>
                      </select>
                      {errors.paymentMethod && (
                        <span>This field is required</span>
                      )}
                    </Col>
                  </Row>

                  <Col xs={12} md={6}>
                    <input
                      className="btn btn-primary custom-lg-btn"
                      type="submit"
                      value="Submit"
                    />
                    {isSuccess && (
                      <Alert className="my-3" variant="success">
                        You have successfully enrolled.
                      </Alert>
                    )}
                  </Col>
                </form>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className="course-sidebar rounded p-4 my-5 shadow">
                <img className="img-fluid rounded" src={sscMathCourse} alt="" />
                <p className="my-4 border-bottom pb-4">
                  <span className="course-price">Price: $500.00</span>
                  <span>
                    <Link to="/courses/enroll" className="custom-enroll-btn">
                      Enroll Now
                    </Link>
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
      </>
    </div>
  );
};

export default Enroll;
