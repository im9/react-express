import 'babel-polyfill'
import React, { Component, PropTypes } from 'react';

// page section component
import Top from './top'
import News from './news'
import Cv from './cv'
import Works from './works'
import Contact from './contact'

class Main extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
        <div>
          <Top />
          <News />
          <Cv />
          <Works />
          <Contact />
        </div>
        );
    }
}

export default Main;