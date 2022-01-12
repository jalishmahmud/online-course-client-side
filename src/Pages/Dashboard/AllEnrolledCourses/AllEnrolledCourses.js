import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";

const AllEnrolledCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    fetch(`https://afternoon-meadow-62966.herokuapp.com/enroll`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data));
  }, [reRender]);

  const handleCancelOrder = (id) => {
    const confirm = window.confirm(
      "Are your sure you want to cancel this order?"
    );
    if (confirm) {
      fetch(`https://afternoon-meadow-62966.herokuapp.com/enroll/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("This order has been canceled");
            setReRender(!reRender);
          } else {
            setReRender(false);
          }
        });
    } else {
    }
  };
  const handleApprovedOrder = (id) => {
    const enroll = { paymentStatus: "Approved" };
    fetch(`https://afternoon-meadow-62966.herokuapp.com/enroll/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(enroll),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setReRender(!reRender);
        } else {
          setReRender(false);
        }
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h4 className="input-group-title pb-2 mb-4 border-bottom">
              My Courses
            </h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Order Date</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myCourses.map((course, index) => (
                  <tr key={course._id}>
                    <td>{index + 1}</td>
                    <td>{course.courseName}</td>
                    <td>
                      {course.date} <br />
                      {course.time}
                    </td>
                    <td>{course.paymentStatus}</td>
                    <td>
                      <span>
                        {course.paymentStatus === "Pending" && (
                          <Button
                            onClick={() => handleApprovedOrder(course._id)}
                            variant="danger"
                          >
                            Approved
                          </Button>
                        )}
                        <Button
                          onClick={() => handleCancelOrder(course._id)}
                          variant="danger"
                        >
                          Cancel
                        </Button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllEnrolledCourses;
