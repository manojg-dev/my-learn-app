import React, { useState } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    caption: 'Welcome to My Learn App'
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    caption: 'Discover Our Services'
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    caption: 'Contact Us for More Info'
  }
];

function MainSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="main-slider">
      <div className="slider-image-wrapper">
        <img src={slides[current].img} alt={slides[current].caption} className="slider-image" />
        <div className="slider-caption">{slides[current].caption}</div>
      </div>
      <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>
      <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default MainSlider;
