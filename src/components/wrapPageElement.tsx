import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import React from 'react';
import Layout from './layout';

const WrapPageElement:
  | GatsbyBrowser['wrapPageElement']
  // eslint-disable-next-line react/prop-types
  | GatsbySSR['wrapPageElement'] = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export default WrapPageElement;
