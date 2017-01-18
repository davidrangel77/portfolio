import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section>
        <h1 className="pageHeadingTitle">Past and Current Projects</h1>
        <div className="content">
          <div>
          <h2>Ironyard Class Assignments</h2>
          <p><a href="https://github.com/davidrangel77/assignments/tree/master/5.3-gift-react"> Refactoring our "gift buying list" assignment in React </a></p>
          <p><a href="https://github.com/davidrangel77/assignments/tree/master/4.3-refactor-calculator"> Refactoring our "Calculator" assignment using jQuery</a></p>
          </div>
        </div>
        <Footer/>
      </section>
    )
  }
})
