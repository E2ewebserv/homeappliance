import React, { useEffect } from 'react';
import './Fridge.css';

import Fridge_Cleaning from './images/fridgehero.jpg'; 
import Gas_Refill from './images/GasRefillFridge.jpg'; 
import Compressor_Replacement from './images/CompressorReplacement.jpg'; 
import Thermostat_Repair from './images/ThermostatRepairFridge.jpg'; 
import Leak_Repair from './images/FridgeLeakRepair.jpg'; 
import fridgeImage from './images/fridge.jpg'; 
import Strange_Noises from './images/StrangeNoisesFridge.jpg'; 
import Water_Leakage_Repair from './images/WaterLeakageFridge.jpg'; 

import FridgeHero from "./images/fridgehero.jpg"; // New image for Fridge services

function FridgeServices() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const services = [
    {
      imgSrc: Fridge_Cleaning,
      title: "General Fridge Repair & Maintenance",
      description: "Comprehensive repair and maintenance services for all types of refrigerators. We ensure optimal functionality and extend the life of your fridge."
    },
    {
      imgSrc: Gas_Refill,
      title: "Gas Refill",
      description: "Expert gas refill services to ensure your fridge operates at peak performance. We handle all types of refrigerants safely and efficiently."
    },
    {
      imgSrc: Fridge_Cleaning, 
      title: "Fridge Cleaning",
      description: "Thorough cleaning of your refrigerator to improve hygiene and efficiency. We remove dust, mold, and any blockages."
    },
    {
      imgSrc: Compressor_Replacement,
      title: "Compressor Replacement",
      description: "Replacing faulty compressors to ensure your fridge functions correctly. Our technicians are trained to handle all compressor types."
    },
    {
      imgSrc: Thermostat_Repair,
      title: "Thermostat Repair",
      description: "Repairing or replacing malfunctioning thermostats to maintain optimal temperature control in your refrigerator."
    },
    {
      imgSrc: Leak_Repair,
      title: "Leak Repair",
      description: "Identifying and repairing refrigerant leaks to ensure your fridge operates efficiently and effectively."
    },
  ]; 

  const issues = [
    {
      imgSrc: fridgeImage,
      title: "Fridge Not Cooling",
      description: "If your fridge is not cooling effectively, it could be due to low refrigerant levels or a faulty compressor.",
      solutions: [
        "Check refrigerant levels and refill if necessary.",
        "Inspect the compressor for any faults.",
        "Clean or replace the air filters."
      ]
    },
    {
      imgSrc: Strange_Noises,
      title: "Strange Noises",
      description: "Unusual sounds from your fridge can indicate mechanical problems or loose parts.",
      solutions: [
        "Tighten any loose screws or parts.",
        "Check for foreign objects obstructing the fan.",
        "Consult a technician if the problem persists."
      ]
    },
    {
      imgSrc: Water_Leakage_Repair,
      title: "Water Leakage Repair",
      description: "Water pooling around your fridge can signify a clogged drain line or a refrigerant leak.",
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
      {/* Fridge Hero Section */}
      <section id="hero" style={{ backgroundImage: `url(${FridgeHero})` }}>
        <div className="container">
          <div className="overlay">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 hero-content">
                <h1>Fridge Repair & Services</h1>
                <p>Your trusted partner for all refrigerator repairs!</p>
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
          <h1>Top-Quality Fridge Repair Services Across Tamil Nadu</h1>
          <p>Get expert fridge repair services in Madurai. Our skilled technicians diagnose and fix all issues, ensuring your refrigerator operates efficiently and effectively. Trust us for prompt and reliable service, using high-quality parts to restore your fridge's performance. Contact us today for all your fridge repair needs!</p>
        </section>

        <section id="our-services" className="container my-5">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-wrench service-icon"></i>
                <h3>Fridge Installation</h3>
                <p>Professional installation of refrigerators for optimal performance.</p>
                <a href="tel:+919944118236" className="btn btn-primary">Book Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-tools service-icon"></i>
                <h3>Fridge Repair</h3>
                <p>Fast and reliable repair services for all types of refrigerators.</p>
                <a href="tel:+919944118236" className="btn btn-primary">Book Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-clipboard-list service-icon"></i>
                <h3>Fridge Maintenance</h3>
                <p>Comprehensive maintenance packages to ensure your fridge operates efficiently all year round.</p>
                <a href="tel:+919944118236" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="fridge-services">
          <div className="container">
            <h2>Types of Fridge Services We Provide</h2><br />
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

        <section className="fridge-issues">
          <div className="container">
            <h2>Common Fridge Issues and Solutions</h2>
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
              { count: "7,200", label: "Fridge Repairs & Services Done" },
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
    </>
  );
}

export default FridgeServices;
