import React from 'react';
import { FaUsers, FaBriefcase, FaBullseye } from 'react-icons/fa';
import '../Components/Style/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-1card">
        <h2>About Our Job Portal</h2>
        <p>
          Our Job Portal is built to bridge the gap between job seekers and employers. 
          We empower professionals to find their dream jobs and help companies connect 
          with the right talent quickly and efficiently.
        </p>
      </div>

      <div className="about-2card">
        <div className='what-we-do'>
          <h3><FaBriefcase />What We Do</h3>
          <p>
            We simplify the hiring process with an easy-to-use platform where candidates can 
            explore verified jobs and recruiters can post openings instantly.
          </p>
        </div>

        <div className="about-3card">
          <h3><FaUsers />Who We Are</h3>
          <p>
            A passionate team of developers and HR experts dedicated to building 
            innovative digital hiring solutions for modern professionals.
          </p>
        </div>

        <div className="about-4card">
          <h3><FaBullseye />Our Mission</h3>
          <p>
            To create an inclusive job marketplace where every individual 
            gets equal opportunity to grow and every company finds the right fit.
          </p>
        </div>
      </div>

      <div className="about-5card">
        <h3>Why Choose Us?</h3>
        <p>
          Our platform offers smart job recommendations, seamless applications, 
          and verified company listings. Whether you are starting your career or 
          scaling your business, we provide the tools and resources to make it happen.
        </p>
      </div>
    </div>
  );
};

export default About;
