/* eslint-disable react/display-name */
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import TodayILearned from '../layouts/TodayILearned';
import '../stylesheets/styles.css';

export default () => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Today I Learned</title>
      <meta name="description" content="site description" />
    </Helmet>
    <TodayILearned />
  </Layout>
);
