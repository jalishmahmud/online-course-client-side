import React from "react";
/* import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"; */
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const { admin } = useAuth();
  return (
    <div className="dashboard">
      <input type="checkbox" id="nav-toggle" />
      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span class="lab la-accusoft"></span>
            <span>MathDataSci</span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li>
              <Link class="active" to="#">
                <span class="las la-igloo"></span> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-users"></span> <span>Students</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-clipboard-list"></span>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-shopping-bag"></span> <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-receipt"></span> <span>Instructor</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-user-circle"></span> <span>Accounts</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-clipboard-list"></span> <span>Task</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span class="las la-home"></span> <span>Back To Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span class="las la-bars"></span>
            </label>
            Dashboard
          </h2>
          <div class="search-wrapper">
            <span class="las la-search"></span>
            <input type="search" placeholder="Search Here" />
          </div>
          <div class="user-wrapper">
            <img src="img/user.png" alt="" width="30px" height="30px" />
            <div>
              <h4>John Doe</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>
        <main>
          <div class="cards">
            <div class="card-single">
              <div>
                <h1>54</h1>
                <span>Students</span>
              </div>
              <div>
                <span class="las la-users"></span>
              </div>
            </div>

            <div class="card-single">
              <div>
                <h1>79</h1>
                <span>Enrollment</span>
              </div>
              <div>
                <span class="las la-clipboard"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>124</h1>
                <span>Orders</span>
              </div>
              <div>
                <span class="las la-shopping-bag"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>$6k</h1>
                <span>income</span>
              </div>
              <div>
                <span class="lab la-google-wallet"></span>
              </div>
            </div>
          </div>
          <div class="recent-grid">
            <div class="projects">
              <div class="card">
                <div class="card-header">
                  <h3>Recent Projects</h3>
                  <button>
                    See all <span class="las la-arrow-right"></span>
                  </button>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Project Title</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span class="status purple"></span>
                            review
                          </td>
                        </tr>
                        <tr>
                          <td>Web Development</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status pink"></span>
                            In Progress
                          </td>
                        </tr>
                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span class="status orange"></span>
                            Pending
                          </td>
                        </tr>

                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span class="status purple"></span>
                            review
                          </td>
                        </tr>

                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span class="status orange"></span>
                            Pending
                          </td>
                        </tr>
                        <tr>
                          <td>Web Development</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status pink"></span>
                            In Progress
                          </td>
                        </tr>
                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span class="status orange"></span>
                            Pending
                          </td>
                        </tr>

                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span class="status purple"></span>
                            review
                          </td>
                        </tr>
                        <tr>
                          <td>Web Development</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status pink"></span>
                            In Progress
                          </td>
                        </tr>
                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span class="status orange"></span>
                            Pending
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="customers">
              <div class="card">
                <div class="card-header">
                  <h3>New Customer</h3>
                  <button>
                    See all <span class="las la-arrow-right"></span>
                  </button>
                </div>

                <div class="card-body">
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Jalish M. Mahmud</h4>
                        <small>Web Developer</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    /*  <Container className="py-5">
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
    </Container> */
  );
};

export default Dashboard;
