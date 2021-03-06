import React from 'react';
import "./Home.css"
import Laura from "../assets/Laura.jpg";
import skills from "../assets/skills.png";

function Home() {
    return (
        <div className="about-me" id="about-me">
            <div className="bio-container">
                <h1 className="about-me-title">About me</h1>
                <div className="bio">
                    <p className="home-bio">After more than 6 years dedicated to the food and customer service sector, I
                        decided to enter the
                        technology sector specializing in full stack web development with Java, SpringBoot and React. At
                        the moment I am actively looking for these first positions as Junior Developer
                        and I continue programming in my own projects. Do not hesitate to contact me for more
                        information
                        and to determine how I can help your company to continue growing.</p>
                    <img src={Laura} className="img-laura"/>
                </div>
                <div className="skills-container">
                    <img src={skills} className="skills" />
                </div>
            </div>
        </div>
    );
}

export default Home;