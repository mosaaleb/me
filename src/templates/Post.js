import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        author
        categories
      }
      body
    }
  }
`;

const Post = ({ data }) => (
  <Layout>
    <div className="mx-auto md:w-11/12 max-w-6xl">
      <h2 className="font-bold text-2xl lg:text-3xl">
        {data.mdx.frontmatter.title}
      </h2>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object
  }).isRequired
};

export default Post;
