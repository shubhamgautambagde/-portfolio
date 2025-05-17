import React from 'react';
import './work.css';
import { motion } from 'framer-motion';

const workData = [
  {
    role: "Intern",
    company: "BMOS Technologies Pvt Ltd",
    duration: "Dec 2024 - May 2025",
    details: [
      "Developed full-stack web applications using the MERN stack, creating dynamic modules and backend functionalities for efficient system operations.",
      "Consulted hospital teams to understand requirements and recommended technology solutions to enhance workflows and user experience.",
      "Implemented secure API integrations and optimized MongoDB queries for faster data access across healthcare modules.",
      "Collaborated closely with UI/UX designers to improve accessibility and overall user experience for admin and staff panels."
    ]
  },
  {
    role: "Intern",
    company: "Intern Pe  ",
    duration: "April 2024 - May 2024",
    details: [
        "Designed and implemented user interfaces using HTML, CSS, and JavaScript frameworks, and developed server-side logic with Node.js.",
        "Deployed full-stack applications on cloud platforms, ensuring security, scalability, and effective configuration management.",
        "Worked in agile development cycles and contributed to CI/CD pipelines with GitHub Actions and Docker.",
        "Wrote unit tests to ensure application reliability and participated in peer reviews to maintain code quality."
    ]
  },
  {
    role: "Intern",
    company: "Anmol Foundation",
    duration: "April 2024 - May2024",
    details: [
        "Led events and managed teams at Anmol Foundation, enhancing communication and problem-solving skills while supporting underprivileged children.",
        "Organized donation drives, outreach programs, and awareness campaigns to promote education and social support.",
        "Created content and managed digital promotion strategies across social platforms for event engagement."
    ]
  },
  {
    role: "Intern",
    company: "CodeSoft",
    duration: "January 2024 - February 2024",
    details: [
        "•	Worked as a Frontend Developer at Cod-Soft, utilizing Kotlin for developing interactive and responsive web applications", 
        "•	Contributed to multiple projects, enhancing user experience and ensuring cross-platform compatibility with a focus on modern UI/UX design principles.",
    ]
  }
];

const Work = () => {
  return (
    <div className='work-section' id='work'>
      <h2 className='work-heading'>Work & Internship Experience</h2>
      <div className='work-container'>
        {workData.map((item, index) => (
          <motion.div
            className='work-card'
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='work-role'>{item.role} | <span className='work-company'>{item.company}</span></h3>
            <p className='work-duration'>{item.duration}</p>
            <ul className='work-details'>
              {item.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;