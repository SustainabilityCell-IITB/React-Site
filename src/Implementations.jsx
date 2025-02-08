import { useRef } from "react";
import impData from "./impData.json";

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

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="implementations">
        <button className="leftScroll" onClick={scrollLeft}>&#10229;</button>

        <div className="imp-container scale-animate" ref={containerRef} style={{ display: "flex", overflowX: "auto", scrollBehavior: "smooth" }}>
          <div className="impBox impH2">
            <h2>Implementations</h2>
          </div>
          {impData.map((item, index) => (
            <ImpBox key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>

        <button className="rightScroll" onClick={scrollRight}>&#10230;</button>
      </section>
    </>
  );
}

export default Implementations;