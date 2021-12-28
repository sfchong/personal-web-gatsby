import React from 'react';
import Layout from './src/components/layout';

const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
