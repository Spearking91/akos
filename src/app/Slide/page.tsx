
'use client'
import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';

const slides = [
  { src: '/images/superCar(5).jpg', alt: 'Slide 1' },
  { src: '/images/superCar(6).jpg', alt: 'Slide 2' },
  { src: '/images/superCar(3).jpg', alt: 'Slide 3' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Slide 
        src={slides[currentSlide].src} 
        alt={slides[currentSlide].alt} 
      />
    </div>
  );
}

export default App;