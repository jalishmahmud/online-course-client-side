import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./DashboardHome.css";
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Container>
        <h3>
          Welcome <span className="welcome-user">{user.displayName}</span>
        </h3>

        <div>
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
        </div>
      </Container>
    </div>
  );
};

export default DashboardHome;
