import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="footerSection">
        <ul className="footerList">
          <Link to="/resume" className="footerLinks">Go To Resume</Link>
          <Link to="/blog" className="footerLinks">Go To Blog</Link>
          <Link to="/projects" className="footerLinks">Go To Projects</Link>
          <Link to="/" className="footerLinks">Home</Link>
        </ul>
      </section>
    )
  }
})
