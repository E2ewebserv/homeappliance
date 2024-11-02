import React, { useEffect } from 'react';
import '../Service/About.css';


function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className='containr'>
          <div className='row'>
        {/* <h1>Know More Us!</h1> <br/> */}
    
        
        </div>
        </div>
      </section>

      <section id="about" class="about-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <h2 class="about-title">  HOME APPLIANCE SERVICE</h2>
        <p class="about-description">
  At <strong>Home Appliance Service</strong>, we are passionate about providing high-quality services for all your home appliances. We believe in offering solutions that make a difference in your life—ensuring your appliances function efficiently and reliably at all times. As an industry leader, our primary goal is to bring you the best service possible with unmatched reliability and efficiency.
</p>

<h4 class="about-subtitle">Our Expertise</h4>
<p class="about-description">
  With years of expertise, we specialize in servicing a wide range of home appliances, including washing machines, refrigerators, microwaves, air conditioners, and more. Our certified technicians are trained in diagnosing and solving various issues, from minor repairs and part replacements to complete system overhauls. Our services ensure that your appliances operate at peak efficiency, providing you with convenience and peace of mind.
</p>

<h4 class="about-subtitle">Why Choose Us?</h4>
<p class="about-description">
  We understand the critical importance of having well-functioning home appliances. Whether at home or in the office, keeping your appliances in top condition is essential. Here’s why customers choose <strong>Home Appliance Service</strong>:
</p>

<ul class="about-list">
  <li><strong>Expert Technicians:</strong> Our team consists of certified, skilled professionals trained to handle every type of home appliance, from the latest models to older units.</li>
  <li><strong>Genuine Spare Parts:</strong> We use only genuine, high-quality parts for all replacements, ensuring long-term reliability and optimal performance.</li>
  <li><strong>Transparent Pricing:</strong> No hidden charges! We believe in transparent pricing and will inform you about all costs upfront. You can trust us for fair and honest service.</li>
  <li><strong>Fast and Efficient Service:</strong> We offer doorstep service with a quick turnaround, ensuring minimal disruption to your day and appliance downtime.</li>
  <li><strong>Customer-Centric Approach:</strong> We prioritize customer satisfaction above all else. Your comfort and convenience are our top priorities, and we ensure that you are always fully satisfied with our service.</li>
</ul>

<h4 class="about-subtitle">Our Services</h4>
<p class="about-description">
  At <strong>Home Appliance Service</strong>, we offer a wide range of services to cater to the diverse needs of our customers. Our services include:
</p>

<ul class="about-list">
  <li><strong>Regular Maintenance:</strong> Routine servicing to ensure your appliances remain in perfect condition and perform optimally.</li>
  <li><strong>Parts Replacement:</strong> Professional replacement of filters, seals, and other essential components to maintain performance.</li>
  <li><strong>Leakage Repairs:</strong> We fix any leakages in your appliances, ensuring uninterrupted operation.</li>
  <li><strong>Full System Overhaul:</strong> If your appliance is malfunctioning, we offer complete repairs or upgrades, including replacing worn-out parts.</li>
  <li><strong>24/7 Emergency Service:</strong> In case of emergencies, our team is available 24/7 to provide rapid service and prevent further damage.</li>
</ul>

<h4 class="about-subtitle">Commitment to Sustainability</h4>
<p class="about-description">
  At <strong>Home Appliance Service</strong>, we believe in the importance of sustainability. Our mission is not only to ensure efficient appliances for all but also to contribute to the planet's well-being. We actively promote eco-friendly solutions and encourage recycling of old parts, helping our customers reduce waste.
</p>

<h4 class="about-subtitle">Customer Satisfaction is Our Priority</h4>
<p class="about-description">
  At the core of our business lies our commitment to excellent customer service. Our mission is to ensure that every customer receives the highest quality service in the shortest time possible. Our friendly customer support team is always available to address any concerns, answer questions, and offer helpful tips. We pride ourselves on maintaining a strong customer base and cultivating long-lasting relationships built on trust and reliability.
</p>

<p class="about-description">
  Our dedication to quality and service has earned us a solid reputation in the industry. We strive to exceed expectations with every service call and look forward to assisting you with all your home appliance needs.
</p>

<center>
          <button class="btn btn-primary about-btn">Learn More</button>
        </center>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default About;
