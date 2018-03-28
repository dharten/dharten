import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import HeadCount from "./components/HeadCount";
import './styles.css';

class App extends Component {
  render() {
    return(
      <Router>
        <HeadCount />
      </Router>
    )
  }
}

export default App;
