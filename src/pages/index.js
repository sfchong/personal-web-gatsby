import * as React from "react";
import MyPhoto from "../images/my-photo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Seo from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <>
      <Seo />
      <div className="content-wrapper">
        <section className="section-avatar content-wrapper">
          <img
            className="img-avatar"
            src={MyPhoto}
            alt="avatar"
            width="200px"
            height="200px"
          />
          <div>
            <p className="avatar-name">Adrian Chong</p>
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
      </div>
      <section className="section-intro">
        <div className="content-wrapper">
          <section className="section-about box home-box">
            <p className="section-heading">1 - About Me</p>
            <p>
              I am a software engineer from Malaysia with more than 3 years of
              professional experience. Currently, I'm working at&nbsp;
              <a
                href="https://www.seekasia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SEEK Asia
              </a>
              , building one of the leading online employment platform in Asia.
            </p>
            <br />
            <p>
              My main focus these days is building backend services with Node.js
              and AWS services like S3, ECS, Lambda, Elasticseach, SNS, SQS etc.
              Previously, I used to build web application using .NET and mobile
              application using Flutter.
            </p>
            <br />
            <p>
              I am naturally curious, passionate to explore and learn new
              technology to improve my skills. Currently, I am learning React
              and Go.
            </p>
          </section>
          <section className="section-contact box home-box">
            <p className="section-heading">2 - Contact</p>
            <p>
              If you wish to contact me, I will try my best to get back to you.
            </p>
            <br />
            <div style={{ textAlign: "center" }}>
              <a
                className="btn btn-primary"
                href="mailto:adrian@adrianchongsf.com"
              >
                Email
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
