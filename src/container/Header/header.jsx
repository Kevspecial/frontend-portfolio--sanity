import React from 'react';
import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './header.scss';

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

const header = () => {
  return (
    <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
          >
          <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="head-text">Kelvin</h1>
                </div>
              </div>
              <div className="tag-cmp app__flex">
              <p className="p-text">Backend Engineer</p>
              <p className="p-text">Entrepreneur</p>
            </div>
            </div>

        </motion.div>

        <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
          >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }} // initial scale
          animate={{ scale: 1 }} // animate to scale 1 (100%)
          transition={{ duration: 1 }} // duration of the transition effect
          variants={scaleVariants} // scale variants
          whileInView={scaleVariants.whileInView} // whileInView variant of scale
          className="app__header-circles" 
        >
          {[images.ruby, images.python, images.git].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
       </motion.div>

   </div>
  );
}

export default header