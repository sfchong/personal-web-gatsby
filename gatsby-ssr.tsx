import { GatsbySSR } from 'gatsby';
import React from 'react';
import ThemeScriptComponent from './src/components/themeScript';
import WrapPageElement from './src/components/wrapPageElement';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = WrapPageElement;

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setPreBodyComponents,
}) => {
  setPreBodyComponents([<ThemeScriptComponent key="theme" />]);
};
