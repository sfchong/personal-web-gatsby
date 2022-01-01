import { GatsbySSR } from 'gatsby';
import WrapPageElement from './src/components/wrapPageElement';

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement: GatsbySSR['wrapPageElement'] = WrapPageElement;
