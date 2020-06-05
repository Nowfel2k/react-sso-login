import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./App.scss";
import "./App.css";
import Form from "./Form";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
  };

  logout = () => {
    this.setState({ isUserLoggedIn: false })
  };



  render() {
    return (
      <div className="App">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />


        <Header />

        {!this.state.isUserLoggedIn && <Form />}

        {
          !this.state.isUserLoggedIn && (
            <GoogleLogin
              clientId="259589474746-7vbcochhgjv9if2c0ga24grjmmv8m5mu.apps.googleusercontent.com"
              render={renderProps => (
                <div>

                  <button 
                    class="loginBtn loginBtn--google" 
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login with Google
                  </button>
                </div>
              )}

              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              isSignedIn={true}
            />
          )
        }
        {
          this.state.isUserLoggedIn && (
            <div className="userDetails-wrapper">
              <div className="details-wrapper">
                <GoogleLogout
                  render={renderProps => (
                    <button
                      className="logout-button"
                      onClick={renderProps.onClick}
                    >
                      LOG OUT
                    </button>
                  )}
                  onLogoutSuccess={this.logout}
                />

                <div className="image">
                  <img src={this.state.userDetails.imageUrl} />
                </div>
                <div className="name">
                  Welcome Mr. {this.state.userDetails.givenName}{" "}
                  {this.state.userDetails.familyName}
                </div>
                <div className="email"><i>{this.state.userDetails.email}</i></div>
              </div>
              <div className="bar" />
              <div className="stand" />
            </div>
          )
        }
      </div >
    );
  }
}

export default App;