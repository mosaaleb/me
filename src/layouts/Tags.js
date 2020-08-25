import React from 'react';
import useTags from '../hooks/useTags';
import TagLinks from '../components/TagLinks';

const Tags = () => {
  const tags = useTags();
  return (
    <div className="max-w-5xl mx-auto md:w-11/12">
      <TagLinks tags={tags} />
    </div>
  );
};

export default Tags;
