import "./Policy.css"

function Policy() {
    return (
        <section id="policy">
          <div className="policy-text">
            <h2>Policy Work</h2>
            <h3>
              ISR (Institute Sustainability Report) <br />
              2022-2023
            </h3>
            <p>
              We are in the final stages of completing and launching India's first
              Institute Sustainability Report, with data up till September 2023.
            </p>
          </div>
          <div
            className="policy-image"
            style={{ backgroundImage: `url(images/policy.webp)` }}
          />
        </section>
      );
};

export default Policy;