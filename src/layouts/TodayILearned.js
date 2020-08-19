import React from 'react';
import TilPreview from '../components/TilPreview';
import useTils from '../hooks/useTils';

const TodayILearned = () => {
  const tils = useTils();
  return (
    <div className="max-w-5xl mx-auto md:w-11/12">
      {tils.map((til) => (
        <TilPreview key={til.slug} til={til} />
      ))}
    </div>
  );
};
export default TodayILearned;
