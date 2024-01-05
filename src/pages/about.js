import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const AboutPage = () => (
  <Layout pageTitle="About Us">
    <p>This is a simple about page for our Gatsby site.</p>
    <StaticImage
    src='../images/example.png'
    />
  </Layout>
);

export default AboutPage;
