import 'babel-polyfill'
import React, { Component, PropTypes } from 'react';

class Error extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        // Debug info
        // console.log(this.props.error.stack)
        return (
        <div>
          <h2>{this.props.message}</h2>
          <h3>{this.props.error.status}</h3>
        </div>
        );
    }
}

export default Error;