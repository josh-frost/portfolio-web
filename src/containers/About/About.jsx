import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  {
    title: 'Front-end Development',
    description: 'Design and implementation experience',
    imgUrl: images.about01,
  },
  {
    title: 'Back-end Development',
    description: 'API development and database optimization',
    imgUrl: images.about02,
  },
  {
    title: 'Web Development',
    description: 'Full-stack web application development at scale',
    imgUrl: images.about03,
  },
];

const About = (props) => {
  return (
    <>
      <h2 className="head-text">
        I know that a <span>great website</span> <br /> means{' '}
        <span>great business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profiles-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default About;
