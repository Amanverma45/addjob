import React from 'react'
import '../Components/Style/Home.css'
import { MdAccountCircle } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { IoBriefcase } from "react-icons/io5";
import { SiCssdesignawards } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { IoCarSport } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-items'>
        <h2 className='label-1'><img src="./Images/JP.png" alt="" />No.1 Job-Portal Website</h2>
        <h1 className='label-2'>Search, Apply & <br />Get your <span>Dream Job</span></h1>
        <p className='label-3'> Your career journey begins here. Discover new possibilities, connect with leading companies, and get closer to your dream job every day.</p>
        <button className='Browse-btn'>Browse Jobs</button>
      </div>
      <div className='Job-steps'>
        <h3>Get Hired in 4 <span>Quick Easy Steps</span></h3>
        <p>Follow our simple step by step guide to quick land your dream job and start your new career journey</p>
        <div className='quick-steps'>
          <div className='card-1'>

            <h4><MdAccountCircle className='job-steps-icon' />Create an Account</h4>
            <p>Sign up with just a few clicks to unlock exclusive access to a world of job oppotunities and landing your dream job. It's quick ,easy and completely free.</p>
          </div>
          <div className='card-2'>
            <h4><MdManageSearch className='job-steps-icon' />Search Jobs</h4>
            <p>Dive into our job database tailored to match your skills and preferences. With your advanced search filters finding the per fact job is never been easier.</p>
          </div>
          <div className="card-3">
            <h4>
              <label htmlFor="fileUpload" className="upload-icon">
                <FiUpload className='job-steps-icon' />
              </label>
              <input type="file" id="fileUpload" />
              <h3>Upload CV/Resume</h3>
            </h4>

            <p>
              Showcase your experience by uploading your CV or resume. Let employers know
              why you are the perfect candidate for their job openings.
            </p>
          </div>

          <div className='card-4'>
            <h4><IoBriefcase className='job-steps-icon' />Get Job</h4>
            <p>Take the final step toward your new career. Get ready to embark on your professional journey and secure the job you have been dreaming of.</p>
          </div>
        </div>
      </div>
      <div className='carrer-option'>
        <h1><span>Countless Career Options</span> Are Waiting For <br /> You To Explore</h1>
        <p>Discover a World for Exciting Opportunities and Endless Possibilities, and Find the Perfect Career Path To Shape Your Future.</p>
        <div className='option-container'>
          <div className='option-card'>
            <h5><SiCssdesignawards className='option-icon' />Design</h5>
          </div>
          <div className='option-card'>
            <h5><FcSalesPerformance className='option-icon' />Sales</h5>
          </div>
          <div className='option-card'>
            <h5><HiOutlineSpeakerphone className='option-icon' />Marketing</h5>
          </div>
          <div className='option-card'>
            <h5><GiMoneyStack className='option-icon' />Finance</h5>
          </div>
          <div className='option-card'>
            <h5><IoCarSport className='option-icon' />Automobile</h5>
          </div>
          <div className='option-card'>
            <h5><TbTruckDelivery className='option-icon' />Logistic/Delivery</h5>
          </div>
          <div className='option-card'>
            <h5><RiAdminFill className='option-icon' />Admin</h5>
          </div>
          <div className='option-card'>
            <h5><FaRegBuilding className='option-icon' />Construction</h5>
          </div>
        </div>
        <button className='view-all-category'>View All Categories</button>
      </div>
      <div className='latest'>
        <h1><span>Latest & Top</span> Job Openings</h1>
        <p>Discover existing New Opportunities and High-Demand Positions Available Now in Top Industries and Companies</p>
        <div className='latest-card'>
          <div className='latest-card1'>
            <h4>Figma</h4>
            <h5>Senior Product Manager</h5>
            <p>Lead the development of innovative product solution</p>
            <div className='card-buttons'>
              <button>12 Position</button>
              <button>Full Time</button>
              <button>$1,50,000/Year</button>
            </div>
          </div>
          <div className='latest-card1'>
            <h4>Figma</h4>
            <h5>Senior Product Manager</h5>
            <p>Lead the development of innovative product solution</p>
            <div className='card-buttons'>
              <button>12 Position</button>
              <button>Full Time</button>
              <button>$1,50,000/Year</button>
            </div>
          </div>
          <div className='latest-card1'>
            <h4>Figma</h4>
            <h5>Senior Product Manager</h5>
            <p>Lead the development of innovative product solution</p>
            <div className='card-buttons'>
              <button className='btn1'>12 Position</button>
              <button className='btn2'>Full Time</button>
              <button className='btn3'>$1,50,000/Year</button>
            </div>
          </div>
          <div className='latest-card1'>
            <h4>Figma</h4>
            <h5>Senior Product Manager</h5>
            <p>Lead the development of innovative product solution</p>
            <div className='card-buttons'>
              <button>12 Position</button>
              <button>Full Time</button>
              <button>$1,50,000/Year</button>
            </div>
          </div>
          <div className='latest-card1'>
            <h4>Figma</h4>
            <h5>Senior Product Manager</h5>
            <p>Lead the development of innovative product solution</p>
            <div className='card-buttons'>
              <button>12 Position</button>
              <button>Full Time</button>
              <button>$1,50,000/Year</button>
            </div>
          </div>
          <div className='latest-card1'>
            <h4>Figma</h4>
            <h5>Senior Product Manager</h5>
            <p>Lead the development of innovative product solution</p>
            <div className='card-buttons'>
              <button>12 Position</button>
              <button>Full Time</button>
              <button>$1,50,000/Year</button>
            </div>
          </div>
        </div>
      </div>
      <div className='we-offer'>
        <h1>What We <span>Offer</span></h1>
        <p>Explore the Benefits andServices We Provide to Enhance Your Job Search and Career Success</p>
        <div className='job-grid'>
          <div className='job-rec'>
            <img src="./public/Images/img1.jpeg" alt="" />
            <h5>Job Recommendation</h5>
            <p>Personalized job matches tailored to your skills and preferences</p>
          </div>
          <div className='job-rec'>
            <img src="./public/Images/img2.webp" alt="" />
            <h5>Create & Build Portfolio</h5>
            <p>Showcase your expertise with professional portfolio design</p>
          </div>
          <div className='job-rec'>
            <img src="./public/Images/img3.webp" alt="" />
            <h5>Career Consultation</h5>
            <p>Receive expert advice to navigate your career path</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
