import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import TagLinks from '../components/TagLinks';
import '../stylesheets/styles.css';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        categories
      }
      body
    }
  }
`;

const Til = ({ data: { mdx: til } }) => (
  <Layout>
    <Helmet>
      <title>{til.frontmatter.title}</title>
    </Helmet>
    <article className="max-w-6xl mx-auto md:w-11/12">
      <TagLinks tags={til.frontmatter.categories} />
      <h2 className="my-4 text-2xl font-bold text-center text-indigo-900 lg:text-4xl">
        {til.frontmatter.title}
      </h2>
      <h4 className="text-xs text-center text-gray-600 lg:text-sm">
        Posted on&nbsp;
        {new Date(til.frontmatter.date).toDateString()}
      </h4>
      <div className="max-w-4xl mx-auto my-10 markdown">
        <MDXRenderer>{til.body}</MDXRenderer>
      </div>
    </article>
  </Layout>
);

Til.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object
  }).isRequired
};

export default Til;
