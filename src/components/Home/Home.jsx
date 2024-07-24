import React from "react";
import { Carousel } from "react-bootstrap";
import SchoolFest from "../Assets/SchoolFest.jpg";
import Annual_Day from "../Assets/AnnualDay.jpg";
import Science_Exhibition from "../Assets/Science_Exhibition.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Springdale Public School</h1>
      <p>We nurture young minds for a brighter future.</p>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Annual_Day} alt="First slide" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Science_Exhibition}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SchoolFest} alt="Third slide" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
