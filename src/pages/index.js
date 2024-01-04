// src/pages/index.js

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {

  return (
    <Layout>
  
      <h1>Welcome to My Gatsby Site</h1>
      <p>This is the home page of my Gatsby site. Customize this content as you wish!</p>
      
      <h2>Latest Blog Posts:</h2>
    </Layout>
  );
};

export default IndexPage;
