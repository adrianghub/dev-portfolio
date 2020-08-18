import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavItems from '../components/Navbar/NavItems/NavItems';

const Blog = () => {
  return (
    <div>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <h1>BLOG</h1>
    </div>
  );
};

export default Blog;