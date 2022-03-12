import { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hocs';
import { sanity, urlFor } from '../../client';

import './Works.scss';

const QUERY_WORKS = '*[_type == "works"]';

const Works = (props) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);

  useEffect(() => {
    sanity
      .fetch(QUERY_WORKS)
      .then((data) => {
        console.log(data);
        setWorks(data);
        setFilteredWorks(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleWorkFilter = (items) => {};

  return (
    <>
      <h2 className="head-text">
        My creative <span>portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {['All', 'UI/UX', 'Web', 'Mobile', 'React'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter == item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filteredWorks.map((work, index) => (
            <div key={index} className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'works');
