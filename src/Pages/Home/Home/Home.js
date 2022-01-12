import React from "react";
import AboutCourse from "../AboutCourse/AboutCourse";
import Banner from "../Banner/Banner";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";
import GetInTouch from "../GetInTouch/GetInTouch";
import "./Home.css";
const Home = () => {
  return (
    <div className="bg-color">
      <Banner></Banner>
      <FeaturedCourses></FeaturedCourses>
      <AboutCourse></AboutCourse>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
