import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import socialBanner from '../images/og-image.png';
import { Site } from 'types/siteMetaData';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        baseUrl: url
      }
    }
  }
`;

interface Props {
  title?: string;
  description?: string;
  url?: string
}

const SEO = ({ title, description, url }: Props) => {
  const { site } = useStaticQuery<Site>(query);

  const { titleTemplate, baseUrl } =
    site.siteMetadata;

  const seo = {
    title: title,
    description: description,
    url: url ? `${baseUrl}/${url}` : baseUrl,
  };

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
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

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default SEO;


