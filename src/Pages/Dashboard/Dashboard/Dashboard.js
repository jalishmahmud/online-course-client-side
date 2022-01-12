import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { admin } = useAuth();
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={3}>
          <Card>
            <Card.Header>
              <h5 className="mt-1">Dashboard</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {!admin ? (
                <ListGroup.Item>
                  <Link to="/dashboard/myCourse">My Course</Link>
                </ListGroup.Item>
              ) : (
                <>
                  <ListGroup.Item>
                    <Link to="/dashboard/allEnrolledCourses">All Enrolled</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/dashboard/makeAdmin">Make Admin</Link>
                  </ListGroup.Item>
                </>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={9}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
