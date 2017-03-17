import 'babel-polyfill'
import React, { Component, PropTypes } from 'react';

class Top extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
        <div>
          <h1>React SSR Sample</h1>
          <p>Comming Soon</p>
        </div>
        );
    }
}

export default Top;