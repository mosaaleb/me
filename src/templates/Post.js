import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import TagLinks from '../components/TagLinks';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        author
        categories
      }
      body
    }
  }
`;

const Post = ({ data: { mdx: post } }) => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>{post.frontmatter.title}</title>
    </Helmet>
    <div className="mx-auto md:w-11/12 max-w-6xl">
      <TagLinks tags={post.frontmatter.categories} />
      <h2 className="font-bold text-2xl lg:text-4xl text-center text-indigo-900 my-4">
        {post.frontmatter.title}
      </h2>
      <h4 className="text-center text-gray-600 text-xs lg:text-sm">
        Posted on&nbsp;
        {new Date(post.frontmatter.date).toDateString()}
      </h4>
      <div className="rounded my-6 max-w-xl mx-auto overflow-hidden">
        <Image
          alt={post.frontmatter.title}
          fluid={post.frontmatter.image.childImageSharp.fluid}
          className="cover"
        />
      </div>
      <div className="max-w-3xl mx-auto my-10">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </div>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object
  }).isRequired
};

export default Post;
