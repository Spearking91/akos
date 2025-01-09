"use client";
import React, { useState, useEffect } from "react";

interface props {
  slides?: any;
  time?: number;
}

function App({
  time = 3,
  slides = [
    { src: "/images/superCar(5).jpg", alt: "Slide 1" },
    { src: "/images/superCar(2).jpg", alt: "Slide 2" },
    { src: "/images/superCar(3).jpg", alt: "Slide 3" },
  ],
}: props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, time * 1000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <img
      key={currentSlide}
      className={
        "w-full h-full object-cover transition-opacity duration-500 ease-linear"
      }
      src={slides[currentSlide].src}
      alt={slides[currentSlide].alt}
    />
  );
}

export default App;
