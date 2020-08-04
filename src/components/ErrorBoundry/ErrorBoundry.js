import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ooops,something went wrong.</h1>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}
