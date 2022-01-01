import * as React from 'react';
import { Link } from 'gatsby';

const notFoundWrapper = {
  paddingTop: '70px',
};

const NotFoundPage = () => (
  <div className="content-wrapper" style={notFoundWrapper}>
    <title>Not found</title>
    <div className="blog-post-content">
      <p>🤔 Hmmm. We couldn’t find what you were looking for.</p>
      <Link to="/">Start over</Link>
    </div>
  </div>
);

export default NotFoundPage;
