import React from 'react';
import Typical from "react-typical";
import "./home.css";
import Image from "../../assets/profile-picture.jpg";
import HeaderSocials from './HeaderSocials.';
import ScrollDown from './ScrollDown';
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home">
      <div className="intro">
        <img src={Image} alt="" className="home_img" />
        <h1 className="home_name">Hello, I'm Joshua</h1>
        <span className="home_education">
          <Typical loop={Infinity}
            steps={[
              "Enthusiastic Dev😎",
              1000,
              "Frontend Developer💻",
              1000,
              "React Developer🌐",
              1000,
            ]} />
        </span>
        
        <span className="home-role-tagline">
          Knack of building applications with frontend operations.
        </span>
        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;