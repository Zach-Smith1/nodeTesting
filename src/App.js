
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    }
  }

  userVal = (e) => {
    e.preventDefault();
    var value = e.target.value;
    this.setState({
      user: value
    })
  }

  passVal = (e) => {
    e.preventDefault();
    var value = e.target.value;
    this.setState({
      pass: value
    })
  }

  sendCred = (e) => {
    e.preventDefault();
    alert(`Username = ${this.state.user}, Password = ${this.state.pass}, now we just need to send those to the back end...`)
  }

  render() {
    return (
      <div className='main'>
        <h1 id='title'>
          Dummy Login
        </h1>
        <div id='login'>
          <p>
            Testing Testing 123
          </p>
          <input placeholder='Username' onChange={this.userVal}/><br/>
          <input placeholder='Password' onChange={this.passVal}/><br/>
          <button onClick={this.sendCred} style={{'width':'153px'}}>Login</button>
        </div>
      </div>
    );
  }
}

export default App;
