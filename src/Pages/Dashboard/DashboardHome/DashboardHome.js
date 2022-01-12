import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user, admin } = useAuth();
  return (
    <div>
      <Container>
        <h3>
          Welcome <span className="text-danger">{user.displayName}</span>
        </h3>

        {admin && <h4>Your are admin </h4>}
      </Container>
    </div>
  );
};

export default DashboardHome;
