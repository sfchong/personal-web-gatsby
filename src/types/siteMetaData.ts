export interface Site {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export interface SiteMetadata {
  title: string;
  titleTemplate: string;
  baseUrl: string;
  description: string;
}
