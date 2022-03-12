import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { sanity, urlFor } from '../../client';
import { SectionWrapper } from '../../hocs';

import './About.scss';

const QUERY_ABOUTS = '*[_type == "abouts"]';

const About = (props) => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    sanity
      .fetch(QUERY_ABOUTS)
      .then((data) => {
        console.log(data);
        setAbouts(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
              <img src={urlFor(about.imgUrl)} alt={about.title} />
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

export default SectionWrapper(About, 'about');
