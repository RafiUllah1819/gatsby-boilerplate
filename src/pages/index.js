// src/pages/index.js

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {

  return (
    <Layout pageTitle ="Home Page">
      <h2>Welcome to My Gatsby Site</h2>
      <p>This is the home page of my Gatsby site. Customize this content as you wish!</p>
      <h3>Latest Blog Posts:</h3>
    </Layout>
  );
};

export default IndexPage;
