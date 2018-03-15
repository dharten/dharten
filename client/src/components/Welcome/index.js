import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import Main from '../Welcome/Main';
import './welcome.css';

class Welcome extends Component{
  constructor() {
    super();
    this.state = {
      name: "",
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('sub');
    this.state.name.length > 1 && this.setState({'submitted': true})
  }

  render() {
    const submitted = this.state.submitted;
    const name = this.state.name;
    console.log(name.length);
    return(
      <div id='welcome'>
        {
          name.length >= 1 && submitted ?
          <Main /> :
          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId="formBasicText"
              // bsSize="sm"
            >
              <ControlLabel>Thank you for visiting. Please enter your name.</ControlLabel>
              <FormControl
                type="text"
                value={this.state.name}
                name="name"
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </form>
        }
      </div>
    )
  }
}

export default Welcome;
