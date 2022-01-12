import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [isCancel, setIsCancel] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://afternoon-meadow-62966.herokuapp.com/enroll/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data));
  }, [isCancel, user.email]);

  const handleCancelOrder = (id) => {
    const confirm = window.confirm(
      "Are your sure you want to cancel your order?"
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
            alert("Your order has been canceled");
            setIsCancel(!isCancel);
          } else {
            setIsCancel(false);
          }
        });
    } else {
    }
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
                    <td>
                      <Button className="mb-2" onClick="" variant="danger">
                        {course.paymentStatus}
                      </Button>
                    </td>
                    <td>
                      <span>
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

export default MyCourses;
