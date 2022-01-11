import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import mathDataSciLogo from "../../../images/logo-math-data.png";
import "./Navigation.css";
const Navigation = () => {
  const { user, signOutUser } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="custom-nav">
        <Navbar.Brand as={Link} to="/">
          <img
            className="img-fluid"
            style={{ maxWidth: "200px" }}
            src={mathDataSciLogo}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Text>
          {user?.displayName && (
            <span>
              <b>Welcome!</b> {user.displayName}
            </span>
          )}
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/allCctv">
            Course
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home/#contact-us">
            Contact
          </Nav.Link>
          {user.email && (
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
          )}
          {user.email ? (
            <Button
              onClick={signOutUser}
              className="custom-btn"
              variant="danger"
            >
              Logout
            </Button>
          ) : (
            <Button className="custom-btn" variant="primary">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;