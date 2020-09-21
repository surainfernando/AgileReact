import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';



export default class Login extends React.Component {

    constructor() {
      super();
      this.state = { name: '', password: '', emaillabel: '', passwordlabel: '' };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);

  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitLogin(event) {
      console.log("")
    const axios = require('axios');
   axios.get(`localhost:5000/displaytemp`)
    .then();
    this.setState({
        emaillabel: "The email ."
      });



    // this.clearLabel()
    // event.preventDefault();
    // login(this.state)
    //   .then(response => { this.handleResponse(response) })
    //   .catch(err => console.log(err.response.data.errors));
  }

 


  

  render() {
    return (
        <div>
        <form onSubmit={this.submitLogin}>
        <label>Name:</label><br></br>
        <input type="text" className="form-control" name="name" onChange={this.handleInputChange} value={this.state.name} /><br></br>
        <label>Password:</label><br></br>
        <input type="password" className="form-control" name="name" /><br></br>
        <label><font color="red">{this.state.emaillabel}</font></label><br></br>
        <button type="submit" class="login">Sign In</button>
        </form>
        </div>
        
    );
  }

}