import React, {useEffect, useState} from 'react'
import './Carousel.css' //will be added later

const Carousel = (props) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>

                <button onClick={next} className="right-arrow">
                    &gt;
                </button>

                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Carousel