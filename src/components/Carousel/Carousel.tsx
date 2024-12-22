import React, { useState } from 'react';
import './Carousel.css';
import logo1 from "/inter.svg";
import logo2 from "/domof.svg";
import logo3 from "/domoff.svg";
import logo6 from "/жкх.svg";

const Carousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const images = [logo1, logo2, logo3, logo6, logo3];

    // Индексы левого и правого изображений
    const leftIndex = (index - 1 + images.length) % images.length;
    const rightIndex = (index + 1) % images.length;

    // Обработчик кликов
    const handleClick = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setIndex(leftIndex);
        } else if (direction === 'right') {
            setIndex(rightIndex);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel-images">
                {/* Левое изображение */}
                <img
                    src={images[leftIndex]}
                    alt=""
                    className="carousel-image small"
                    onClick={() => handleClick('left')}
                />
                {/* Центральное изображение */}
                <img
                    src={images[index]}
                    alt=""
                    className="carousel-image large"
                />
                {/* Правое изображение */}
                <img
                    src={images[rightIndex]}
                    alt=""
                    className="carousel-image small"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
};

export default Carousel;