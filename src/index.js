import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import MastheadContainer from "./components/masthead-container/masthead-container.component";
import Configuration from "./components/configuration/configuration.component";

import * as serviceWorker from "./serviceWorker";
import "./microsoft-teams-app.js";

const Masthead = () => <MastheadContainer />
const Config = () => <Configuration />
const NotFound = () => <div>404 - Not found.</div>

render(
  <Router className="w-100vw h-100vh">
    <Masthead path="/" />
    <Config path="config" />
    <NotFound default />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
