import React from 'react';
import './about_me.css';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className='about_me'
      id='aboutMey'
    >
      <div className='about_me_wrapper'>
        <h2 className='heading'>About Me</h2>

        <div className='about_me_info_fullwidth'>
          <motion.p
            className='about_me_text_full'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hello! I'm <strong>Anushri Tiwari</strong>, a passionate and results-driven Computer Science student with a solid foundation in software development, consulting, and cloud-based solutions. I bring strong technical expertise in C++, SQL, and full-stack web development using React, Next.js, and the MERN stack, along with a deep understanding of Data Structures, Algorithms, and Cloud Computing.

During my internships, I not only led development efforts on real-world applications but also actively collaborated with teams and stakeholders to consult on technical solutions. My ability to communicate clearly and confidently with both technical and non-technical teams has consistently added value to projects.

I hold certifications in:

AWS Cloud Practitioner Essentials,

Data Visualization using Tableau & Power BI,

Introduction to Artificial Intelligence,

AWS Identity and Access Management and

Core Java.
Known for my leadership, collaboration, and critical thinking abilities, I have consistently contributed to impactful solutions during internships and as a team leader in community initiatives. I’m deeply committed to continuous learning, innovation, and building inclusive, cross-functional environments that empower teams to thrive.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;