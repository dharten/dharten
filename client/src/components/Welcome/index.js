import React, { Component } from 'react';
import { Jumbotron, FormGroup, FormControl, Button } from 'react-bootstrap';

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
    this.state.name.length > 0 && this.setState({'submitted': true})
  }

  render() {
    const submitted = this.state.submitted;
    const name = this.state.name;
    return(
      <div id='main-div'>
        {
          name.length > 0 && submitted ?
          <Main /> :
          <div id="welcome-main">
            <Jumbotron>
              <h1>Thank you for visiting!</h1>
              <p>
                Please enter your name
              </p>
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicText" >
                  <FormControl
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </form>
            </Jumbotron>
          </div>
        }
      </div>
    )
  }
}

export default Welcome;
