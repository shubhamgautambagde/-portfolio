import React from 'react'
import Card from './Card';
import Mortarage from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import Grocerystore_chatbot from"./images/chatbot.jpg"
import banking from"./images/bankingsytem.png"
import flower from"./images/flowershop.jpg"
import Airline from "./images/airlineManagementsystem.jpg"
import Ranahospital from"./images/hospital.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: Mortarage,
          altText: 'Home Mortarage website',
          title: 'GharEasy',
          description: 'Built a multi-page GharEasy clone using Next.js, implementing a functional mortgage calculator and designing a fully responsive, user-friendly interface with modular, scoped styling using CSS Modules to ensure maintainability and performance.',
          explore:"https://ghar-easy-com.vercel.app/"
        },
        {
          imageUrl:Grocerystore_chatbot,
          altText: 'Grocery-Store-Chatbot',
          title: 'Grocery-Store-Chatbot',
          description: 'Developed a responsive, animated user interface for a Grocery-Store-Chatbot using ReactJS, integrating features like product search, order tracking, store details, and customer support to enhance user engagement and streamline shopping experiences',
          explore:"https://github.com/ROCKANU/Grocery-Store-Chatbot"

        },
        {
          imageUrl: banking,
          altText: 'BANKING-SYSTEM',
          title: 'BANKING-SYSTEM',
          description: "The Banking System is a C++ based console application that allows users to manage bank accounts with features like creating accounts, depositing and withdrawing money, and viewing account details. It uses object-oriented programming and file handling to store and manage customer data securely.",
          explore:"https://github.com/ROCKANU/BANKING-SYSTEM"
        },
        {
            imageUrl: flower,
            altText: 'flower-shop-website',
            title: 'flower-shop-website',
            description: "The Flower Shop Website is a responsive and visually appealing web project built using HTML and CSS. It features beautifully styled sections for showcasing floral products, an elegant homepage layout, and smooth navigation to enhance the user experience for online flower shopping.",
            explore:"https://github.com/ROCKANU/flower-shop-website"
        },
        {
            imageUrl: Airline,
            altText: 'Airline Management System',
            title: 'Airline Management System',
            description: "The Airline Management System in C++ is a console-based project that allows users to manage flight bookings, schedules, and passenger records efficiently. It uses file handling for data storage and implements features like ticket booking, flight listing, and check-in through a menu-driven interface.",
            explore:"https://github.com/ROCKANU/airline_management_system"
        },
        {
            imageUrl: Ranahospital ,
            altText: 'Rana Hospital Management System',
            title: 'Rana Hospital Management System',
            description: "Developed the Admin and Doctor Modules for the Rana Hospital Management System using the MERN stack (MongoDB, Express.js, React, Node.js), focusing on building scalable and user-friendly components. Designed interactive dashboards, implemented secure login and role-based access, and integrated backend APIs for managing appointments, patient records, and user data efficiently.",
            explore:"https://github.com/ROCKANU/flower-shop-website"
        }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
