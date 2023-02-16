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
      url: 'http://127.0.0.1:3000/users',
      params: {
        'username': this.state.user
      }
    };
    axios(options)
      .then((res) => {
        if (res.data.password === this.state.pass) {
          alert('Successful Login!')
        } else if (res.data.password === 'x') {
          alert('User not found\nHint: Username is case sensitve.')
        } else if (this.state.pass === '') {
          alert('Must enter a password')
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
    alert('User-Password combinations: \nuser: joeblow password: test\nuser: JohnSmith password: 12345678\nuser: test_user1 password: admin')
// ************** Old Code Referencing sqlite database *********
    // var options = {
    //   method: 'get',
    //   url: '/users',
    //   params: {}
    // };
    // axios(options)
    //   .then((res) => {
    //     alert(JSON.stringify(res.data.data))
    //   })
    //   .catch((error) => {
    //     console.log('axios request error', error);
    //   });
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
        <div id='notes'>Notes: Simple login working as intended</div>
      </div>
    );
  }
}

export default App;
