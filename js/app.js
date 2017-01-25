import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section>
        { this.props.children }
        <Footer/>
      </section>
    )
  }
})
