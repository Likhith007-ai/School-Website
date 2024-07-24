import React from "react";
import "./Gallery.css";
import sportsDay from "../Assets/sports_day.jpg";
import scienceExhibition from "../Assets/science_exhibition.webp";
import culturalFest from "../Assets/cultural_fest.jpg";
import classroom from "../Assets/classroom.jpg";
import library from "../Assets/library.jpg";
import schoolTour from "../Assets/schoolTour.mp4";
import annualFunction from "../Assets/fest.mp4";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <h2>Photos</h2>
      <div className="photos">
        <div className="photo-card">
          <img src={sportsDay} alt="Sports Day" />
          <p>Students participating in various sports events.</p>
        </div>
        <div className="photo-card">
          <img src={scienceExhibition} alt="Science Exhibition" />
          <p>Students presenting their science projects.</p>
        </div>
        <div className="photo-card">
          <img src={culturalFest} alt="Cultural Fest" />
          <p>Students performing in the cultural fest.</p>
        </div>
        <div className="photo-card">
          <img src={classroom} alt="Classroom" />
          <p>A glimpse of our interactive classrooms.</p>
        </div>
        <div className="photo-card">
          <img src={library} alt="Library" />
          <p>Students reading and studying in the school library.</p>
        </div>
      </div>
      <h2>Videos</h2>
      <div className="videos">
        <div className="video-card">
          <video src={schoolTour} controls>
            Virtual tour of Springdale Public School
          </video>
          <p>Virtual tour of Springdale Public School.</p>
        </div>
        <div className="video-card">
          <video src={annualFunction} controls>
            Highlights from the Annual Function 2023
          </video>
          <p>Highlights from the Annual Function 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
