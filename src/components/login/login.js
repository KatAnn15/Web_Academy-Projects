import React from "react";
import { Link } from "react-router-dom";
import facebook_Icon from "../../assets/images/global-imgs/sign-up/facebook-icon.png";
import google_Icon from "../../assets/images/global-imgs/sign-up/google-logo.jpg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
//import { CurrentPage } from "../../App";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      isMember: false,
    };
  }
  //static contextType = CurrentPage;
  openLogIn = () => {
    this.state.login
      ? this.setState({ login: false })
      : this.setState({ login: true });
  };
  responseFacebook = (resp) => {
    console.log(resp);
    fetch("http://localhost:4000/contacts")
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
      });
  };
  responseGoogle = (response) => {
    console.log(response.profileObj);
    fetch("http://localhost:4000/contacts")
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
      });
  };

  updateMember = (response, id) => {
    console.log("Thsis is the PUT response: ", response);
    fetch(`http://localhost:4000/contacts/${id}`, {
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
    fetch("http://localhost:4000/contacts", {
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
            <button className="login-box_btn email-btn">
              {this.state.login ? "Log In" : "Sign Up"} with Email
            </button>
          </div>
          <Link to="/" onClick={this.returnPage}>
            <button className="lightbox__close-btn">&times; </button>
          </Link>
        </div>
      </div>
    );
  }
}
