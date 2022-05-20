import React from 'react';
import "./Portfolio.css";
import Carousel from "./Carousel";
import legacygames from "../assets/screenshots/legacygames";
import fundacion from "../assets/screenshots/fundacion";
import econotravel from "../assets/screenshots/econotravel.png";
import gallery from "../assets/screenshots/gallery.png";

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-container">
                <h1 className="portfolio-title">Portfolio</h1>
                <p1 className="portfolio-info">Below are some screenshots of the current projects that I am worked as a
                    contributor
                    , and will continue to work
                    on daily on my own. I integrate all of the tips and techniques that I learn into my projects as soon
                    as I can in an effort to always improve my skill as a developer.
                </p1>
            </div>
            <div className="slide-container">

                    <Carousel>

                        <img className="slider-image" src={legacygames} alt="placeholder"/>
                        <img className="slider-image" src={fundacion} alt="placeholder"/>
                        <img className="slider-image" src={econotravel} alt="placeholder"/>
                        <img className="slider-image" src={gallery} alt="placeholder"/>

                    </Carousel>


            </div>
        </div>
    )
}

export default Portfolio;