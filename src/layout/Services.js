import React, { useRef, useEffect } from "react";

const Services = () => {
  const section = useRef(null);

  useEffect(() => {
    console.log(section.current);
  }, []);

  return (
    <div
      id="services"
      ref={section}
      className="section-holder even-section services"
    >
      <section className="section">
        <h2>Services</h2>

        <div className="services-row">
          <div className="services-column">
            <img
              src="images/cctv.webp"
              alt=""
              id="services-img3"
              className="services-img"
            />
          </div>

          <div className="services-column">
            <p>
              Bandit leverages the power of mobile connectivity with an
              extensive network of licensed security and low voltage technicians
              to aid in service calls and small projects.
            </p>
          </div>

          <div className="services-column">
            <img
              src="/images/access-control2.webp"
              alt=""
              id="services-img1"
              className="services-img"
            />
            <img
              src="/images/panel-technician.webp"
              alt=""
              id="services-img2"
              className="services-img"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="how-it-works">
          <h2>How It Works</h2>
          <img
            src="/images/Bandit-how-it-works.png"
            alt=""
            className="how-it-works-img"
          />

          <hr />

          <ul>
            <li>
              The Partner receives the inbound service request from their
              customer.
            </li>
            <li>
              Details about service call are filled out on the web portal and
              submitted to the network
            </li>
            <li>
              Local technicians are alerted and the first technician to accept
              the job prompts a link for the Partner with the technician's
              profile and ETA.
            </li>
            <li>
              Upon completion, the Partner and customer grade the technician’s
              service and Bandit releases payment
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
