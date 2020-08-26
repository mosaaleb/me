import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import TilPreview from '../components/TilPreview';
import PostPreview from '../components/PostPreview';
import Layout from '../layouts/Layout';
import '../stylesheets/styles.css';

export const query = graphql`
  query($tag: String!) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        excerpt
        parent {
          ... on File {
            sourceInstanceName
          }
        }
      }
    }
  }
`;

const Tag = ({ data: { allMdx: { nodes: tutorials } }, pageContext }) => {
  const renderTutorials = tutorials.map((tutorial) => {
    if (tutorial.parent.sourceInstanceName === 'posts') {
      return (
        <PostPreview
          key={tutorial.frontmatter.slug}
          post={{ ...tutorial.frontmatter, excerpt: tutorial.excerpt }}
        />
      );
    }
    return (
      <TilPreview
        key={tutorial.frontmatter.slug}
        til={{ ...tutorial.frontmatter, excerpt: tutorial.excerpt }}
      />
    );
  });

  return (
    <Layout>
      <Helmet>
        <title>{pageContext.tag}</title>
      </Helmet>
      <div className="max-w-5xl mx-auto md:w-11/12">
        {renderTutorials}
      </div>

    </Layout>
  );
};

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.object
  }).isRequired
};

export default Tag;
