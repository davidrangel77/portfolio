import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section className="sectionAll">
        <h1>Resume</h1>
        <div>
          <p className="resumeHeaderText">David Rangel</p>
          <p className="resumeHeaderText">6719 Blue Oak Ln</p>
          <p className="resumeHeaderText">San Antonio, TX 78227</p>
          <p className="resumeHeaderText">(210) 836-4821</p>
          <p className="resumeHeaderText">mr.davidrangel@gmail.com</p>
        </div>
        <Footer/>
      </section>
    )
  }
})
