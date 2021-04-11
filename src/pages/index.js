import * as React from "react"
import { Layout } from "../components/layout"
import MyPhoto from "../images/my-photo.jpeg"
import { FaGithub, FaLinkedin } from "react-icons/fa"

// markup
const IndexPage = () => {
  return (
    <Layout title="SF Chong">
      <section className="section-avatar content-wrapper fade-in">
        <img className="img-avatar" src={MyPhoto} alt="avatar"></img>
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
      <section className="section-intro">
        <div className="content-wrapper">
          <section className="section-about box fade-in">
            <h1 className="section-heading">1 - About Me</h1>
            <p>
              Hello, my name is SF. I have been doing fullstack development for
              3 years. I am passionate to explore and learn new technology to
              become a better software engineer, who build better software for
              the world.
            </p>
            <br></br>
            <p>I use C#/.NET, JavaScript, React, Go.</p>
          </section>
          <section className="section-contact box fade-in">
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
      </section>
    </Layout>
  )
}

export default IndexPage
