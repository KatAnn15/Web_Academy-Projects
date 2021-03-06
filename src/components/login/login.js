import React from "react";
import facebook_Icon from "../../assets/images/global-imgs/sign-up/facebook-icon.png";
import google_Icon from "../../assets/images/global-imgs/sign-up/google-logo.jpg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import EmailLoginForm from "./email-login";
import { isMobile } from "react-device-detect";
import EmailSignUpForm from "./emailSignUp";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      emailLogin: false,
      isMember: false,
      logInMode: false,
    };
    this.url = isMobile
      ? "http://192.168.1.7:4000/contacts"
      : "http://localhost:4000/contacts";
  }

  openLogIn = () => {
    this.state.login
      ? this.setState({ login: false })
      : this.setState({ login: true });
    this.state.logInMode
      ? this.setState({ logInMode: false })
      : this.setState({ logInMode: true });
    console.log("this is member state: ", this.state.loginMode);
    console.log("This is email login state: ", this.state.emailLogin);
  };
  openEmailLogin = () => {
    this.setState({ emailLogin: true });
  };
  responseFacebook = (resp) => {
    console.log(resp);
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        let contacts = data;
        console.log(contacts);
        this.setState({ isMember: true });
        let emails = [];
        contacts.forEach((contact) => {
          emails.push(contact.email);
        });
        if (emails.indexOf(resp.email) > -1) {
          console.log(resp.userID);
          this.updateMember(resp, resp.userID);
        } else {
          this.newMember(resp, resp.userID);
        }
        this.props.sendData([resp.email]);
        this.closeLogin();
      });
  };
  responseGoogle = (response) => {
    console.log(response.profileObj);
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        let contacts = data;
        console.log(contacts);
        this.setState({ isMember: true });
        let emails = [];
        contacts.forEach((contact) => {
          emails.push(contact.email);
        });
        if (emails.indexOf(response.profileObj.email) > -1) {
          this.updateMember(response.profileObj, response.googleId);
        } else {
          this.newMember(response.profileObj, response.profileObj.googleId);
        }
        this.props.sendData([response.profileObj.email]);
        this.closeLogin();
      });
  };
  closeLogin = () => {
    return this.props.closeLogin();
  };

  updateMember = (response, id) => {
    console.log("Thsis is the PUT response: ", response);
    fetch(`${this.url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email: response.email,
        name: response.name,
        avatarUrl: response.imageUrl,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Updated: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  newMember = (response, id) => {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: response.email,
        name: response.name,
        avatarUrl: response.imageUrl,
        id: id,
      }),
    })
      .then((resp) => {
        console.log(resp.json());
      })
      .then((data) => {
        console.log("Created: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  closedWindow = () => {
    console.log("Login window has been closed!");
  };
  returnPage = () => {
    console.log("What");
  };
  openFacebookPrompt = () => {
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={false}
      fields="name,email,picture"
      callback={this.responseFacebook}
    />;
  };

  render() {
    return (
      <div className="login-lightbox">
        <div className="login-box__wrapper">
          <h2 className="login-box__title">
            {this.state.login ? "Log In" : "Sign Up"}
          </h2>
          <h3 className="login-box__subtitle" onClick={this.openLogIn}>
            {this.state.login
              ? "Not yet a member? Sign Up"
              : "Already a member? Log In"}
          </h3>
          <div className="login-box__action-bar">
            <FacebookLogin
              appId="970403773487287"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
              onFailure={this.closedWindow}
              s
              onClick={this.openFacebookPrompt}
              render={(renderProps) => (
                <button
                  className="login-box_btn facebook-btn"
                  onClick={renderProps.onClick}
                >
                  <img
                    className="sign-up__facebook-icon"
                    src={facebook_Icon}
                    width="30px"
                    height="30px"
                    alt="facebook-icon"
                    style={{
                      zIndex: 4,
                    }}
                  />
                  {`${this.state.login ? "Log In" : "Sign Up"} with Facebook`}
                </button>
              )}
            />
            <GoogleLogin
              clientId={
                "260163687506-5h0g4382fb9hataok6qooce7jcbv7rkv.apps.googleusercontent.com"
              }
              onSuccess={this.responseGoogle}
              cssClass="google-btn"
              autoLoad={false}
              onFailure={this.closedWindow}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <button
                  className="login-box_btn google-btn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    className="sign-up__facebook-icon"
                    src={google_Icon}
                    width="30px"
                    height="30px"
                    alt="facebook-icon"
                    style={{
                      zIndex: 4,
                    }}
                  />
                  {`${this.state.login ? "Log In" : "Sign Up"} with Google`}{" "}
                </button>
              )}
            />
            <span>
              <hr /> or <hr id="hr-right" />
            </span>
            {this.state.emailLogin && this.state.logInMode ? (
              <EmailLoginForm
                closeLogin={this.closeLogin}
                sendData={this.props.sendData}
              />
            ) : this.state.emailLogin && this.state.logInMode === false ? (
              <EmailSignUpForm
                closeLogin={this.closeLogin}
                sendData={this.props.sendData}
              />
            ) : (
              <button
                className="login-box_btn email-btn"
                onClick={this.openEmailLogin}
              >
                {this.state.login ? "Log In" : "Sign Up"} with Email
              </button>
            )}
          </div>
          <button
            className="lightbox__close-btn"
            onClick={this.props.closeLogin}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
