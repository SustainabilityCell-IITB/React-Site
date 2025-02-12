import { useRef } from "react";
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
  const containerRef = useRef(null);

  const getScrollAmount = () => {
    return window.innerWidth < 768 ? 150 : 300; // Adjust scroll distance based on screen size
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="implementations" className="imp-section">
        <button className="scrollBtn leftScroll" onClick={scrollLeft}>
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

        <button className="scrollBtn rightScroll" onClick={scrollRight}>
          &#10230;
        </button>
      </section>
    </>
  );
}

export default Implementations;