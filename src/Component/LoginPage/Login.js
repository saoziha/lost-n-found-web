import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: "",
      userId: "",
      name: "",
      email: "",
      picture: ""
    };
  }

  componentClicked = () => {
    console.log("clicked");
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      accessToken: response.accessToken,
      userId: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    console.log(response);
    console.log(this.state);
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = <h2>asdasdasdsasdsdads</h2>;
    } else {
      fbContent = (
        <FacebookLogin
          appId="440317406588918"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
