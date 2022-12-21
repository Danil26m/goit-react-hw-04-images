import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Searchbar extends Component {

  render() {
    return (
        <header className="Searchbar">
        <form className="form" onSubmit={this.props.submit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
      
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
Searchbar.propTypes={
  submit: PropTypes.func
}
export default Searchbar