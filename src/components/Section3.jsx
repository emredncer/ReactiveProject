const Section3 = () => {
  return (
    <section className="trainer" id="trainer">
      <div className="trainer-container">
        <h2>OUR BEST TRAINERS</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="trainers-container">
          <div className="trainer-portfolio">
            <div className="stick"></div>
            <img src="img/trainer1.jpg" />
            <div className="stick-bottom"></div>
            <div className="trainer-layer">
              <h4>Marry Jane</h4>
              <p>Pilates Trainer</p>
            </div>
          </div>
          <div className="trainer-portfolio">
            <div className="stick"></div>
            <img src="img/trainer2.jpg" />
            <div className="stick-bottom"></div>
            <div className="trainer-layer">
              <h4>Henry Cavill</h4>
              <p>Functional Trainer</p>
            </div>
          </div>
          <div className="trainer-portfolio">
            <div className="stick"></div>
            <img src="img/trainer3.jpg" />
            <div className="stick-bottom"></div>
            <div className="trainer-layer">
              <h4>Jane Doe</h4>
              <p>Cardio Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
