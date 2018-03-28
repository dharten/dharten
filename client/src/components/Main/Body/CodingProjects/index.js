import React from 'react';

import Links from '../Links';

class CodingProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  render() {
    return(
      <Links />
    )
  }
}

export default CodingProjects;
