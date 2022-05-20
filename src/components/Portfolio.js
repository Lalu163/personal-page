import React from 'react';
import "./Portfolio.css";
import Carousel from "./Carousel";

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-container">
                <h1 className="portfolio-title">Portfolio</h1>
                <p1 className="portfolio-info">Below are some of the current projects that I am worked as a contributor
                    , and will continue to work
                    on daily on my own. I integrate all of the tips and techniques that I learn into my projects as soon
                    as I can in an effort to always improve my skill as a developer.
                </p1>
            </div>
            <div className="slide-container">

                <Carousel>

                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                </Carousel>

            </div>
        </div>
    )
}

export default Portfolio;