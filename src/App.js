import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Enroll from "./Pages/Courses/Enroll/Enroll";
import SingleCourse from "./Pages/Courses/SingleCourse/SingleCourse";
import AllEnrolledCourses from "./Pages/Dashboard/AllEnrolledCourses/AllEnrolledCourses";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyCourses from "./Pages/Dashboard/MyCourses/MyCourses";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/courses/singleCourse"
            element={<SingleCourse />}
          ></Route>
          <Route
            path="/courses/enroll"
            element={
              <PrivateRoute>
                <Enroll />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardHome />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/myCourse"
              element={
                <PrivateRoute>
                  <MyCourses />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/allEnrolledCourses"
              element={
                <AdminRoute>
                  <AllEnrolledCourses />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/dashboard/makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            ></Route>
          </Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
