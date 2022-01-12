import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login-image.jpg";
const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({});
  const { registerNewUser, signInWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterInfo = { ...registerInfo };
    newRegisterInfo[field] = value;
    setRegisterInfo(newRegisterInfo);
  };

  const handleRegister = (e) => {
    registerNewUser(
      registerInfo.email,
      registerInfo.password,
      registerInfo.name,
      location,
      navigate
    );
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <div className="pb-5">
      <Container>
        <Row className="mt-5">
          <Col md={5} xs={12} className=" p-5">
            <h2 className="mb-3">Register </h2>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="name"
                  onBlur={getInputFieldValue}
                  type="text"
                  placeholder="Your Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  onBlur={getInputFieldValue}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onBlur={getInputFieldValue}
                  type="password"
                  placeholder="Your password"
                />
              </Form.Group>
              {authError && (
                <Alert className="my-3" variant="danger">
                  {authError}
                </Alert>
              )}

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember" />
              </Form.Group>

              <Button className="me-2" variant="primary" type="submit">
                Register
              </Button>
              {isLoading && <Spinner animation="border" variant="primary" />}
              <span className="m-4">
                <Link to="/login">Already Register? Login Here</Link>
              </span>
            </Form>
            <div className="my-3">OR</div>
            <Button onClick={handleGoogleSignIn} variant="danger" type="submit">
              Login With Google
            </Button>
          </Col>
          <Col md={7} xs={12} className=" p-5 rounded shadow">
            <div>
              <img className="img-fluid" src={loginImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
