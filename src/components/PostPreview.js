import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Post = ({ post }) => (
  <article className="bg-indigo-transparent p-4 mb-4 rounded shadow-lg">
    <h2 className="font-bold text-2xl underline text-indigo-600">
      <Link to={`/${post.slug}`}>{post.title}</Link>
    </h2>
    <div>
      <p>{post.excerpt}</p>
      <h4 className="text-indigo-600 leading-loose">
        <Link to={`/${post.slug}`}>Continue Reading ⟶</Link>
      </h4>
    </div>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string
  }).isRequired
};

export default Post;
