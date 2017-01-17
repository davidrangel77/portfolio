import React from 'react'
import { Link } from 'react-router'
import Landing from './landing'

export default React.createClass({
  render() {
    return (
      <section>
        { this.props.children }
      </section>
    )
  }
})
