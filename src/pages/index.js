import * as React from "react"
import MyPhoto from "../images/my-photo.jpeg"
import { FaGithub, FaLinkedin } from "react-icons/fa"

// markup
const IndexPage = () => {
  return (
    <>
      <title>Adrian Chong</title>
      <div className="content-wrapper">
        <section className="section-avatar content-wrapper">
          <img className="img-avatar" src={MyPhoto} alt="avatar"></img>
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
          <section className="section-about box">
            <p className="section-heading">1 - About Me</p>
            <p>
              Hello, my name is Adrian. I have been doing fullstack development
              for 3 years. I am passionate to explore and learn new technology
              to become a better software engineer, who build better software
              for the world.
            </p>
            <br></br>
            <p>I use C#/.NET, JavaScript, React, Go.</p>
          </section>
          <section className="section-contact box">
            <p className="section-heading">2 - Contact</p>
            <p>
              If you have any question or just want to say hello, I will try my
              best to get back to you.
            </p>
            <br></br>
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
  )
}

export default IndexPage
