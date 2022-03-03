import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Home.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Home = (props) => {
  return (
    <div className="app__home app__flex">
      <motion.div
        className="app__home-badge"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text greeting-text">Hello, my name is</p>
            <h1 className="home-text">Josh</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Life-long Learner</p>
        </div>
      </motion.div>

      <motion.div
        className="app__home-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        className="app__home-circles"
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {[images.redux, images.react, images.graphql].map((image, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={image} alt="skill circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
