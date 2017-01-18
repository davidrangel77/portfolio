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
          <ul>
            <li><a href="https://github.com/davidrangel77/assignments/tree/master/5.3-gift-react" target="_blank"> Refactoring our "gift buying list" assignment in React </a></li>
            <li><a href="https://github.com/davidrangel77/assignments/tree/master/4.3-refactor-calculator" target="_blank"> Refactoring our "Calculator" assignment using jQuery</a></li>
            <li><a href="https://github.com/davidrangel77/assignments" target="_blank"> Repository for most of our week 1-5 assignments
            </a></li>
          <li><a href="https://github.com/TCollins81/all-things-spurs" target="_blank"> Our group project for week 6
          </a></li>
          </ul>
          </div>
        </div>
        <Footer/>
      </section>
    )
  }
})
