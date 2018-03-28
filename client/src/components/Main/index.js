import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Body from './Body';
import Home from './Body/Home';
import CodingProjects from './Body/CodingProjects';

function Main() {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/projects' component= { CodingProjects } />
      </Switch>
      <Body />
    </div>
  )
}

export default Main;
