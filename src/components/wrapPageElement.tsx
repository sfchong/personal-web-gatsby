import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import React from 'react';
import Layout from './layout';

const WrapPageElement: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']  = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default WrapPageElement;
