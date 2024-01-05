import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql , Link } from "gatsby"

const ContactPage = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
  }
`)
console.log("data" , data)
const {title,description, siteUrl, author } = data.site.siteMetadata
  return(
    <Layout pageTitle="Contact Us">
      <h3>{title}</h3>
    <p>{description}</p>
    <Link to='/'>{siteUrl}</Link>
  </Layout>
  )
}

export default ContactPage;
