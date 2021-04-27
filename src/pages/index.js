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
              Hello, my name is Adrian. I am a software engineer. I have been
              doing fullstack development for 3 years. I use C#/.NET for web
              development and Flutter for mobile development at work.
            </p>
            <br></br>
            <p>
              I am passionate to explore and learn new technology to improve my
              skills. I am learning React and Go. I built my personal website
              and blog with Gatsby.
            </p>
            <br></br>
            <p>I write blog about programming and technology. </p>
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
