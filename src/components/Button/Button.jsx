import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <button className='Button' type='button' onClick={this.props.click}>Load more</button>
    )
  }
}
Button.propTypes={
  click:PropTypes.func
}
export default Button