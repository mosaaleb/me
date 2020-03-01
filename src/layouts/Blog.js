import React from 'react';
import PostPreview from '../components/PostPreview';
import usePosts from '../hooks/usePosts';

const Blog = () => {
  const posts = usePosts();
  return (
    <div className="mx-auto md:w-11/12 max-w-5xl">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};
export default Blog;
