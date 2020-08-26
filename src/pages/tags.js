/* eslint-disable react/display-name */
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Tags from '../layouts/Tags';
import '../stylesheets/styles.css';

export default () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Tags</title>
      <meta name="description" content="site description" />
    </Helmet>
    <Tags />
  </Layout>
);
