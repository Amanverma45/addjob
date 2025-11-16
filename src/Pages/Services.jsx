import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import '../Components/Style/Services.css';

const Services = () => {
  const servicesList = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "We build responsive, high-performance websites tailored to your business needs."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android that engage users effectively."
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, social media, and targeted campaigns."
    },
  ];

  return (
    <div className="services-container">
      <div className="heading-services">
        <h2>Our Services</h2>
        <p>
          We provide a range of professional services to help your business grow and succeed. Explore our core offerings below.
        </p>
      </div>

      <div className="services-section">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
