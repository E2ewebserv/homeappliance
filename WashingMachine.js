import React, { useEffect } from 'react';
 



import WASHERHERO from "./images/washerhero.jpg";


function WashingMachine() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, 
  []);

  return (
    <>
    
      <section id="hero" style={{ backgroundImage: `url(${WASHERHERO})` }}>
        <div className="container">
          <div className="overlay">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 hero-content">
                <h1>Washing Machine Services</h1>
                <p>Your trusted partner for all washing machine repairs!</p>
                <a href="tel:+1234567890" className="call-button">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





 
      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <h2>About</h2>
              <p>
                We offer expert washing machine service, ensuring your appliance
                runs smoothly and efficiently. Whether it's a front-load or
                top-load machine, our certified technicians are skilled in
                handling all types of issues, from minor repairs to major part
                replacements. We understand the inconvenience a faulty washing
                machine can cause, which is why we provide prompt, doorstep
                service with a focus on quality and customer satisfaction.
              </p>
              <center>
                <button className="btn btn-primary">More</button>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section id="desc">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <img src={WASHERHERO} alt="Ac service" className="img-fluid" />
            </div>
             <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              {/*<img src={WASHERHERO} alt="Ac service" className="img-fluid" />
              <img src={WASHERHERO} alt="Ac service" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </section>
      <section id="issue">
        <div className="container py-5">
          <div className="row text-center">
            {/* Issue 1 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="issue-box p-4">
                <i className="fas fa-water fa-3x issue-icon"></i>
                <h3>Water Drainage Problems</h3>
                <p>
                  We fix water drainage issues to prevent flooding and ensure
                  your washing machine works efficiently.
                </p>
              </div>
            </div>

            {/* Issue 2 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="issue-box p-4">
                <i className="fas fa-cogs fa-3x issue-icon"></i>
                <h3>Mechanical Issues</h3>
                <p>
                  Our technicians repair mechanical faults to ensure smooth
                  operation of your washing machine.
                </p>
              </div>
            </div>

            {/* Issue 3 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="issue-box p-4">
                <i className="fas fa-plug fa-3x issue-icon"></i>
                <h3>Electrical Issues</h3>
                <p>
                  We resolve electrical problems to make sure your washing
                  machine operates safely.
                </p>
              </div>
            </div>

            {/* Issue 4 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="issue-box p-4">
                <i className="fas fa-drum fa-3x issue-icon"></i>
                <h3>Drum Issues</h3>
                <p>
                  Our experts fix or replace faulty drums to restore optimal
                  performance of your washing machine.
                </p>
              </div>
            </div>

            {/* Issue 5 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="issue-box p-4">
                <i className="fas fa-thermometer-half fa-3x issue-icon"></i>
                <h3>Temperature Problems</h3>
                <p>
                  We fix heating issues to ensure your washing machine maintains
                  the right temperature for washing.
                </p>
              </div>
            </div>

            {/* Issue 6 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="issue-box p-4">
                <i className="fas fa-power-off fa-3x issue-icon"></i>
                <h3>Power Supply Issues</h3>
                <p>
                  We resolve power supply issues to ensure consistent
                  performance from your washing machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-choose">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-tools"></i>
          <h5>Expert Technicians</h5>
          <p>
            Our certified technicians ensure your washing machines are serviced with the highest expertise.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-clock"></i>
          <h5>Fast Service</h5>
          <p>
            We provide quick, same-day service to get your washing machine running without delay.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-cogs"></i>
          <h5>Genuine Spare Parts</h5>
          <p>
            Only original spare parts are used for long-lasting repair and optimal washing performance.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-thumbs-up"></i>
          <h5>Customer Satisfaction</h5>
          <p>
            We strive for 100% customer satisfaction with every washing machine service we provide.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-hand-holding-usd"></i>
          <h5>Affordable Prices</h5>
          <p>
            Our washing machine services are budget-friendly, offering excellent value without compromising on quality.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-phone"></i> {/* Corrected icon */}
          <h5>24/7 Support</h5>
          <p>
            Get in touch with us anytime, with 24/7 support available for all your washing machine needs.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-map-marker-alt"></i>
          <h5>Doorstep Service</h5>
          <p>
            We offer convenient doorstep service, so you don't have to worry about transportation.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="why-item">
          <i className="fas fa-shield-alt"></i>
          <h5>Reliable Warranty</h5>
          <p>
            Our washing machine service includes a warranty, giving you peace of mind and guaranteeing quality work.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section id="timing">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item">
              <i className="fas fa-calendar-day"></i>
              <h5>Monday</h5>
              <p>7:00 AM - 7:00 PM</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item">
              <i className="fas fa-calendar-day"></i>
              <h5>Tuesday</h5>
              <p>7:00 AM - 7:00 PM</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item">
              <i className="fas fa-calendar-day"></i>
              <h5>Wednesday</h5>
              <p>7:00 AM - 7:00 PM</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item">
              <i className="fas fa-calendar-day"></i>
              <h5>Thursday</h5>
              <p>7:00 AM - 7:00 PM</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item">
              <i className="fas fa-calendar-day"></i>
              <h5>Friday</h5>
              <p>7:00 AM - 7:00 PM</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item">
              <i className="fas fa-calendar-day"></i>
              <h5>Saturday</h5>
              <p>7:00 AM - 7:00 PM</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 col-12 timing-item sunday">
              <i className="fas fa-calendar-day"></i>
              <h5>Sunday</h5>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default WashingMachine;
