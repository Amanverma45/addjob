import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../Components/Style/Jobs.css';

const demoJobs = [
  {
    title: "Frontend Developer",
    company: "TechSolutions Pvt Ltd",
    location: "Indore, Onsite",
    type: "Full-time",
  },
  {
    title: "Java Backend Developer",
    company: "Innovatech Systems",
    location: "Indore, Onsite",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Indore, Onsite",
    type: "Contract",
  },
  {
    title: "Digital Marketing Executive",
    company: "GrowthHackers",
    location: "Indore, Onsite",
    type: "Part-time",
  },
];

const Job = () => {
  return (
    <div className="job-container px-6 py-12 bg-gray-50 text-gray-800">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">Find Your Dream Job in Indore</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore verified onsite job opportunities in Indore. Build your profile, apply easily, and start your career with top local companies.
        </p>
      </div>

      {/* Job Listings */}
      <div className="job-listings max-w-5xl mx-auto">
        {demoJobs.map((job, index) => (
          <div key={index} className="job-card flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-xl p-6 mb-6 transition hover:shadow-xl">
            <div className="job-info">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-1"><FaBriefcase className="inline mr-2" />{job.company}</p>
              <p className="text-gray-700 mb-1"><FaMapMarkerAlt className="inline mr-2" />{job.location}</p>
            </div>
            <div className="job-type mt-3 md:mt-0">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                <FaClock className="inline mr-1" /> {job.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Why choose us */}
      <div className="why-choose mt-12">
        <h3>Why Use Our Job Portal?</h3>
        <p>
          Get verified onsite job opportunities in Indore, personalized recommendations, and an easy application process. 
          Whether you are starting your career or growing professionally, our portal gives you the tools to succeed.
        </p>
      </div>
    </div>
  );
};

export default Job;
