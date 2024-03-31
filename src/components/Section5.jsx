const Section5 = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>CONTACT US</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="message-container">
          <div className="phone-container">
            <h6>
              Mobile Number &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
              Address
            </h6>
            <span>+135 773 321 4442&nbsp; &nbsp; &nbsp;demo@demo.com</span>
            <div className="input-container">
              <h3>Make An Appointment</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                rows="5"
                cols="50"
                name="text"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="googleMap">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
