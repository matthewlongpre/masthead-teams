import React, { Component } from "react";
import "./microsoft-teams-app.js";
import MastheadLogo from "../masthead-logo/masthead-logo";
import PageBackground from "./configuration.styles";

class Configuration extends Component {
  render() {
    return (
      <PageBackground>
        <MastheadLogo />
      </PageBackground>
    );
  }
}

export default Configuration;
