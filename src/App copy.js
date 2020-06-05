import React, { Component } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'

export class App extends Component {

  responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)

    let profile = response.profileObj
    let welcomer = document.getElementById('header')
    welcomer.innerText = `Welcome ${profile.givenName}`
  }


  render() {
    return (
      <div>
        <h1 id="header">

        </h1>
        <GoogleLogin
          clientId="259589474746-7vbcochhgjv9if2c0ga24grjmmv8m5mu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          id="login-btn"
          isSignedIn={true}
        />
        <GoogleLogout
          clientId="259589474746-7vbcochhgjv9if2c0ga24grjmmv8m5mu.apps.googleusercontent.com"
          buttonText="Logout"
          isSignedIn={false}
          onClick={this.logout.bind(this)}
        >
        </GoogleLogout>
      </div>
    )
  }
}

export default App
