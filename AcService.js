import React, { useEffect } from 'react';
import './AcService.css';


import AC_Cleaning from './images/AC Cleaning.jpg'; 
import Gas_Refill from './images/Gas Refill.jpeg'; 
import Fan_Motor_Replacement from './images/Fan Motor Replacement.webp'; 
import Thermostat_Repair from './images/Thermostat Repair.jpg'; 
import Leak_Repair from './images/Leak Repair.jpg'; 

import ac from './images/ac.jpg'; 
import Strange_Noises from './images/Strange Noises.jpg'; 
import Water_Leakage_Repair from './images/Water Leakage Repair.jpg'; 





import ACHERO from "./images/achero.jpg"; // New image for AC services

function AcServices() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);




  const services = [
    {
      imgSrc: AC_Cleaning,
      title: "General AC Repair & Maintenance",
      description: "Comprehensive repair and maintenance services for all types of air conditioners. We ensure optimal functionality and extend the life of your AC."
    },
    {
      imgSrc: Gas_Refill,
      title: "Gas Refill",
      description: "Expert gas refill services to ensure your AC operates at peak performance. We handle all types of refrigerants safely and efficiently."
    },
    {
      imgSrc: AC_Cleaning, // You may want to use a different image for this service
      title: "AC Cleaning",
      description: "Thorough cleaning of your air conditioning system to improve air quality and efficiency. We remove dust, allergens, and blockages."
    },
    {
      imgSrc: Fan_Motor_Replacement,
      title: "Fan Motor Replacement",
      description: "Replacing faulty fan motors to ensure your AC functions correctly. Our technicians are trained to handle all motor types."
    },
    {
      imgSrc: Thermostat_Repair,
      title: "Thermostat Repair",
      description: "Repairing or replacing malfunctioning thermostats to maintain optimal temperature control in your home."
    },
    {
      imgSrc: Leak_Repair,
      title: "Leak Repair",
      description: "Identifying and repairing refrigerant leaks to ensure your AC operates efficiently and effectively."
    },
  ]; 
  const issues = [
    {
      imgSrc: ac,
      title: "AC Not Cooling",
      description: "If your AC is not cooling effectively, it could be due to low refrigerant levels or a faulty compressor.",
      solutions: [
        "Check refrigerant levels and refill if necessary.",
        "Inspect the compressor for any faults.",
        "Clean or replace the air filters."
      ]
    },
    {
      imgSrc: Strange_Noises,
      title: "Strange Noises",
      description: "Unusual sounds from your AC can indicate mechanical problems or loose parts.",
      solutions: [
        "Tighten any loose screws or parts.",
        "Check for foreign objects obstructing the fan.",
        "Consult a technician if the problem persists."
      ]
    },
    {
      imgSrc: Water_Leakage_Repair,
      title: "Water Leakage Repair",
      description: "Water pooling around your AC unit can signify a clogged drain line or a refrigerant leak.",
      solutions: [
        "Clear any blockages in the drain line.",
        "Inspect for refrigerant leaks.",
        "Check the drain pan for damages."
      ]
    },
    // Add more issues as needed
  ];
  
  return (
    <>
    
      {/* AC Hero Section */}
      <section id="hero" style={{ backgroundImage: `url(${ACHERO})` }}>
        <div className="container">
          <div className="overlay">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 hero-content">
                <h1>AC Repair & Services</h1>
                <p>Your trusted partner for all air conditioning repairs!</p>
                <a href="tel:+1234567890" className="call-button">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
            <section className="info">
                <h1>Top-Quality AC Repair Services Across Tamil Nadu</h1>
                <p>Get expert AC repair services in Madurai. Our skilled technicians diagnose and fix all issues, ensuring your air conditioning unit operates efficiently and effectively. Trust us for prompt and reliable service, using high-quality parts to restore your AC's performance. Contact us today for all your AC repair needs!</p>
            </section>

            <section id="our-services" className="container my-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="row">
                    {/* AC Installation */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="service-card">
                            <i className="fas fa-wrench service-icon"></i>
                            <h3>AC Installation</h3>
                            <p>Professional installation of air conditioning units for optimal cooling performance.</p>
                            <a href="tel:+919944118236" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>

                    {/* AC Repair */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="service-card">
                            <i className="fas fa-tools service-icon"></i>
                            <h3>AC Repair</h3>
                            <p>Fast and reliable repair services for all types of air conditioning systems.</p>
                            <a href="tel:+919944118236" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>

                    {/* AC Maintenance */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="service-card">
                            <i className="fas fa-clipboard-list service-icon"></i>
                            <h3>AC Maintenance</h3>
                            <p>Comprehensive maintenance packages to ensure your AC operates efficiently all year round.</p>
                            <a href="tel:+919944118236" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>

            </section>
            
            
            <section className="ac-services">
      <div className="container">
        <h2>Types of AC Services We Provide</h2><br />
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="service-item col-lg-6 col-md-6 col-12">
              <img src={service.imgSrc} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

            
    <section className="ac-issues">
      <div className="container">
        <h2>Common AC Issues and Solutions</h2>
        {issues.map((issue, index) => (
          <div key={index} className="row issue-item">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={issue.imgSrc} alt={issue.title} className="issue-image" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
              <ul>
                {issue.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    
                <section className="milestones">
                <h2>Our Milestones</h2>
                <div className="milestone-container">
                    {[
                        { count: "5,000", label: "Happy Families" },
                        { count: "7,200", label: "AC Repair & Services Done" },
                        { count: "10", label: "Years Of Experience" },
                        { count: "25", label: "Experienced Technicians" },
                    ].map((milestone, index) => (
                        <div key={index} className="milestone">
                            <div className="counter">{milestone.count}</div>
                            <div className="label">{milestone.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

      {/* AC Services Section
      <section className="services">
        <h2>Our AC Services</h2>

        <div className="service-card">
          <img src="/images/ac-repair.jpg" alt="AC Repair" />
          <h3>AC Repair</h3>
          <p>We offer expert repair services for all types of air conditioners. Our technicians ensure optimal cooling performance.</p>
        </div>

        <div className="service-card">
          <img src="/images/ac cleaning.jpg" alt="AC Cleaning" />
          <h3>AC Cleaning</h3>
          <p>Keep your AC efficient with our deep cleaning services to prevent blockages and maintain airflow.</p>
        </div>

        <div className="service-card">
          <img src="/images/ac-installation.jpg" alt="AC Installation" />
          <h3>AC Installation</h3>
          <p>Professional AC installation to ensure proper setup and long-lasting performance for your cooling system.</p>
        </div>
      </section> */}
    </>
  );
}

export default AcServices;
