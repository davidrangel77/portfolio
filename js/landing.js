import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <div>
        <h1>Short Website About D Rangel</h1>
        <h2>Jr. Developer in training; San Antonio, Tx</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="https://github.com/davidrangel77/">see more work in progress on Github</a>
        </div>
        <div>
          <Link to="/resume">Go To Resume</Link>
          <Link to="/blog">Go To Blog</Link>
          <Link to="/projects">Go To Projects</Link>
        </div>
      </section>
    )
  }
})
