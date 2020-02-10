/* eslint-disable react/display-name */
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Portfolio from '../layouts/Portfolio';
import useSiteMetadata from '../hooks/useSiteMetadata';
import '../stylesheets/styles.css';

export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Portfolio />
    </Layout>
  );
};
