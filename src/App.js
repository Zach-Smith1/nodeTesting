import React from "react";
import axios from 'axios';

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
    var options = {
      method: 'get',
      url: '/users',
      params: {
        'username': this.state.user
      }
    };
    axios(options)
      .then((res) => {
        if (res.data.data[0].password === this.state.pass) {
          alert('Successful Login!')
        } else {
          alert(`Login Unsuccessful, username and password don\'t match`)
        }
      })
      .catch((error) => {
        console.log('axios request error', error);
      });
  }

  showAll  = (e) => {
    e.preventDefault();
    var options = {
      method: 'get',
      url: '/users',
      params: {}
    };
    axios(options)
      .then((res) => {
        alert(JSON.stringify(res.data.data))
      })
      .catch((error) => {
        console.log('axios request error', error);
      });
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
          <input type='password' placeholder='Password' onChange={this.passVal}/><br/>
          <button onClick={this.sendCred} style={{'width':'153px'}}>Login</button>

        </div>
        <div id='extra'>
          <button onClick={this.showAll} style={{'width':'153px'}}>Current Users</button>
        </div>
        <div id='notes'>Notes: Next goal is to add Create Account module to add new users to the sqlite database</div>
      </div>
    );
  }
}

export default App;
