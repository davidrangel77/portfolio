import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section className="sectionAll">
        <div>
        <h1>Short Website About D Rangel</h1>
        <h2>Jr. Developer in training; San Antonio, Tx</h2>
        <p>Welcome! My name is David Rangel and I am an aspiring front-end developer currently attending classes at <a href="https://www.theironyard.com/">The Ironyard</a> in San Antonio, Tx. I have had many careers and experiences, but I believe I am on the path to the most successful time in my professional life. Please use the links below to navigate through these pages. </p>
        <a href="https://github.com/davidrangel77/" target="_blank">see more work in progress on Github</a>
        </div>
        <div>
          <Footer/>
        </div>
      </section>
    )
  }
})
