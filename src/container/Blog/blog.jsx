import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './blog.scss';
import { urlFor, client } from '../../client';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blogs"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {blogs.map((blog, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={blog.title + index}
          >
            <img src={urlFor(blog.imgUrl)} alt={blog.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{blog.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{blog.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Blog, 'app__blog'),
  'blog',
  'app__whitebg',
);