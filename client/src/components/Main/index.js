import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import HeadCount from '../HeadCount';
import Navbar from './Navbar';
import Body from './Body';

function Main() {
  return(
    <div>
      <Navbar />
       {/* <Switch> */}
         {/* <Route exact path='/' component={ HeadCount } /> */}
       {/* </Switch> */}
      <Body />
    </div>
  )
}

export default Main;
