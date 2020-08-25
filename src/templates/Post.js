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
        tags
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
    <article className="max-w-6xl mx-auto md:w-11/12">
      <TagLinks tags={post.frontmatter.tags} />
      <h2 className="my-4 text-2xl font-bold text-center text-indigo-900 lg:text-4xl">
        {post.frontmatter.title}
      </h2>
      <h4 className="text-xs text-center text-gray-600 lg:text-sm">
        Posted on&nbsp;
        {new Date(post.frontmatter.date).toDateString()}
      </h4>
      <div className="max-w-3xl mx-auto my-4">
        <div className="max-w-3xl mx-auto mt-6 overflow-hidden border rounded shadow-lg">
          <Image
            alt={post.frontmatter.title}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        </div>
        <ImageAttribute attribute={post.frontmatter.attribute} />
      </div>
      <div className="max-w-4xl mx-auto my-10 markdown">
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
