/* eslint-disable react/display-name */
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Blog from '../layouts/Blog';
import '../stylesheets/styles.css';

export default () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Blog</title>
      <meta name="description" content="site description" />
    </Helmet>
    <Blog />
  </Layout>
);
