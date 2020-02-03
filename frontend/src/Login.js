import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target);

    // fetch('http://localhost:5000/sort', {
    //   method: 'GET',
    //   body : data
    // });
  }

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>

          <div> <br/>Email</div>
          <input id="myemail" name="email" type="email" required/>

          <div> <br/>Password </div>
          <input id="mypassword" name="password" type="password" required/>

          <div> <br/> </div>
          <button style = {{backgroundColor : 'SlateBlue', color : 'white'}}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;