export interface MarkdownRemark {
  allMarkdownRemark: {
    nodes: Node[];
  };
}

export interface Node {
  id: string;
  html: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: FrontMatter;
}

export interface FrontMatter {
  slug: string;
  title: string;
  date: string;
  fromNow: string;
  tags: string[];
}
