import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';

const Projects = () => {
  const ProjectsList = [
    {
      id: 1,
      name: "Marketing site design & build",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Glide Utilities",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Noton High Street Product",
      imageUrl: project1,
    },
    {
      id: 4,
      name: "Gifts and Voucher Today",
      imageUrl: project2,
    },
    {
      id: 5,
      name: "Productkart Studio",
      imageUrl: project1,
    },
    {
      id: 6,
      name: "Library Management",
      imageUrl: project2,
    },
  ];

  return (
    <motion.div className="projects" 
        animate={{scale: [2, 1], rotate: [90, 0]}}
        transition={{ duration: 0.5, ease: 'easeInOut'}}
    >
      <h2>Projects</h2>

      <div className="wrapper">
        {ProjectsList.map((item) => {
          return (
            <motion.div key={item.id}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 }}}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Projects;