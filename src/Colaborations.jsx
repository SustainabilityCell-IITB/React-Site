import "./Collaborations.css"

const Collaborations = () => {
    return (
      <section className="collab" id="collaborations">
        <h2>Collaborations</h2>
        <hr />
        <div className="collab-content">
          <div className="collab-head">
            <h3>Bisleri Knowledge Partnership</h3>
            <div
              className="collab-image"
              style={{ backgroundImage: `url(images/sponsorBisleri2.webp)` }}
            />
          </div>
  
          <div className="collab-text">
            <p>
              The association is dedicated to educating housekeeping staff,
              students, and teaching staff on responsible plastic usage and
              recycling. This involves sensitizing individuals about proper
              plastic disposal, ensuring regular collection for recycling, and
              maintaining a yearly database of plastic collection on campus. The
              collaboration with Bisleri signifies a commitment to sustainability,
              with a focus on raising awareness and fostering a sense of
              responsibility among participants and students for future
              environmental conservation.
            </p>
            <p>
              As part of this initiative, the association has actively supported
              Bisleri in promoting awareness, emphasizing the importance of
              recycling, reducing, and reusing plastic materials. They have
              showcased examples of transformed plastic into environmentally
              responsible products, providing a hands-on understanding of the
              recycling process. This collective effort aims to make a positive
              impact on their mission to promote sustainability and responsible
              environmental practices.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Collaborations;