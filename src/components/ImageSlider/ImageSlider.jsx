import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import image1 from "../../assets/thumbnail4.png";
import image2 from "../../assets/thumbnail2.jpg";
import image3 from "../../assets/thumbnail3.jpg";
const images = [image1, image2, image3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : "hidden"}
        />
      ))}
    </div>
  );
};

export default ImageSlider;