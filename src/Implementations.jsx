import { useState, useRef, useEffect } from "react";
import impData from "./impData.json";
import "./Implementations.css";

function ImpBox({ image, title, description }) {
  return (
    <div className="impBox">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Implementations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = impData.length + 1; // +1 for the "Implementations" page
  const touchStartX = useRef(0);
  const containerRef = useRef(null);

  const goNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX.current;

    if (swipeDistance > 50) {
      goPrev(); // Swipe Right → Move to Previous
    } else if (swipeDistance < -50) {
      goNext(); // Swipe Left → Move to Next
    }
  };

  // Ensure proper scrolling when index changes
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        left: container.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section
      id="implementations"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="scrollBtn leftScroll" onClick={goPrev} disabled={currentIndex === 0}>
        &#10229;
      </button>

      <div className="imp-container" ref={containerRef}>
        <div className="impBox impH2">
          <h2>Implementations</h2>
        </div>
        {impData.map((item, index) => (
          <ImpBox key={index} image={item.image} title={item.title} description={item.description} />
        ))}
      </div>

      <button className="scrollBtn rightScroll" onClick={goNext} disabled={currentIndex === totalItems - 1}>
        &#10230;
      </button>
    </section>
  );
}

export default Implementations;
