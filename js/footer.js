import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="footerSection">
        <ul className="footerList">
          <Link to="/blog" className="footerLinks">BLOG POSTS</Link>
          <Link to="/projects" className="footerLinks">COURSE PROJECTS</Link>
          <Link to="/resume" className="footerLinks">RESUME</Link>
          <Link to="/" className="footerLinks">HOME</Link>
        </ul>
      </div>
    )
  }
})
