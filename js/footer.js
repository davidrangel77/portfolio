import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <ul>
          <Link to="/resume">Go To Resume</Link>
          <Link to="/blog">Go To Blog</Link>
          <Link to="/projects">Go To Projects</Link>
          <Link to="/">Home</Link>
        </ul>
      </section>
    )
  }
})
