import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import TagLinks from '../components/TagLinks';
import ImageAttribute from '../components/ImageAttribute';
import '../stylesheets/styles.css';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        image {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        attribute { source, photographer_name, photographer_link, source_url }
        categories
      }
      body
    }
  }
`;

const Post = ({ data: { mdx: post } }) => (
  <Layout>
    <Helmet>
      <title>{post.frontmatter.title}</title>
    </Helmet>
    <article className="mx-auto md:w-11/12 max-w-6xl">
      <TagLinks tags={post.frontmatter.categories} />
      <h2 className="font-bold text-2xl lg:text-4xl text-center text-indigo-900 my-4">
        {post.frontmatter.title}
      </h2>
      <h4 className="text-center text-gray-600 text-xs lg:text-sm">
        Posted on&nbsp;
        {new Date(post.frontmatter.date).toDateString()}
      </h4>
      <div className="max-w-3xl mx-auto my-4">
        <div className="rounded mt-6 mx-auto border overflow-hidden shadow-lg max-w-3xl">
          <Image
            alt={post.frontmatter.title}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        </div>
        <ImageAttribute attribute={post.frontmatter.attribute} />
      </div>
      <div className="markdown my-10 max-w-4xl mx-auto">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </article>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object
  }).isRequired
};

export default Post;
