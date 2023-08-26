import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MyPhoto from '../images/my-photo.jpeg';
import Seo from '../components/seo';

// markup
const IndexPage = () => (
  <main className="site-wrapper">
    <div className="content-wrapper section-avatar">
      <h1 style={{ fontSize: '40px' }}>Will be back.</h1>
      <div style={{ marginTop: '30px', fontSize: '24px' }}>
        <p>This website is under construction. Check back soon.</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <a
          className="icon-link"
          href="https://github.com/sfchong"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/sfchong"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </main>
);

export default IndexPage;
