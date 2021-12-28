import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import socialBanner from '../images/og-image.png';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

const SEO = ({ title, description, url }) => {
  const { site } = useStaticQuery(query);

  const { defaultTitle, titleTemplate, defaultDescription, siteUrl } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: url ? `${siteUrl}/${url}` : siteUrl,
  };

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      defaultTitle={defaultTitle}
      htmlAttributes={{
        lang: 'en',
      }}
      link={[
        {
          rel: 'canonical',
          href: seo.url,
        },
      ]}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          name: 'og:title',
          content: seo.title,
        },
        {
          name: 'og:description',
          content: seo.description,
        },
        {
          name: 'og:url',
          content: seo.url,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: socialBanner,
        },
      ]}
    />
  );
};

export default SEO;

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};
