


'use client'
import React, { useState, useEffect } from 'react';

interface props{
    src: any;
    alt: string;
}

const slides = [
  { src: '/images/superCar(5).jpg', alt: 'Slide 1' },
  { src: '/images/superCar(2).jpg', alt: 'Slide 2' },
  { src: '/images/superCar(3).jpg', alt: 'Slide 3' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  

  return (
<img className={`transition-opacity duration-1000 ease-linear object-cover w-full h-full`} src={slides[currentSlide].src} alt={slides[currentSlide].alt} />
  );
}

export default App;