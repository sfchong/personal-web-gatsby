import * as React from "react";
import "@fontsource/noto-sans";
import "@fontsource/noto-sans/700.css";
import "@fontsource/ibm-plex-sans";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/main.scss";
import MyPhoto from "../images/my-photo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// markup
const IndexPage = () => {
  return (
    <div>
      <title>SF Chong</title>
      <Header />
      <div className="site-wrapper">
        <section className="section-intro">
          <img className="img-avatar" src={MyPhoto}></img>
          <div>
            <p className="avatar-name">SF Chong</p>
            <p className="avatar-desc">
              Software engineer based in Kuala Lumpur, Malaysia.
            </p>
          </div>
          <div>
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
        </section>
        <section className="section-about box">
          <h1 className="section-heading">1 - About Me</h1>
          <p>
            Hello, my name is SF. I have been doing fullstack development for 3
            years. I am passionate to explore and learn new technology to become
            a better software engineer, who build better software for the world.
          </p>
          <br></br>
          <p>I use C#/.NET, JavaScript, React, Go.</p>
        </section>
        <section className="section-contact box">
          <h1 className="section-heading">2 - Contact</h1>
          <p>
            If you have any question or just want to say hello, I will try my
            best to get back to you.
          </p>
          <br></br>
          <div style={{ textAlign: "center" }}>
            <a
              className="btn btn-secondary"
              href="mailto:soonfook11@hotmail.com"
            >
              Email
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
