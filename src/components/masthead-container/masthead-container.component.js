import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as constants from "./../../shared/constants";

import logoLight from "./../../data/logo-light.svg";
import logoDark from "./../../data/logo-dark.svg";

import MastheadList from "../masthead-list/masthead-list.component";
import MastheadSearch from "../masthead-search/masthead-search.component";
import S from "./../../styles/styles";

import * as microsoftTeams from "@microsoft/teams-js";

import theme from "./../../styles/colors";

export default class MastheadContainer extends Component {
  state = {
    data: null,
    flatMenu: new Map(),
    menuState: [],
    theme: theme["light"]
  }

  componentDidMount() {

    const nav = this._getMastheadVersion();
    nav.then(response => {
      this.setState({
        data: response.v
      })
      this._processNav(response.v.menu)})

    // this._processNav(data.v.menu);

    // Call the initialize API first
    microsoftTeams.initialize();

    // Check the initial theme user chose and respect it
    microsoftTeams.getContext(context => {
      if (context && context.theme) {
        this.setTheme(context.theme);
      }
    });

    // Handle theme changes
    microsoftTeams.registerOnThemeChangeHandler(theme => {
      this.setTheme(theme);
    });

  }

  // Set the desired theme
  setTheme = (teamsTheme) => {
    if (teamsTheme) {
      // Possible values for teamsTheme: "default", "light", "dark" and "contrast"
      // document.body.className = "theme-" + (theme === "default" ? "light" : theme);
      teamsTheme = (teamsTheme === "default" ? "light" : teamsTheme);

      this.setState({
        theme: theme[teamsTheme]
      });
    }
  }

  _getMastheadVersion() {
    return this._mastheadRequest(window.savedToken, "GET", `${constants.apiURL}getNav`)
      .then(request => {
        if (request.status === 200) {
          let data;
          try {
            data = JSON.parse(request.response);
          } catch (e) {
            throw "FailedJSONParse";
          }
          return data;
        } else {
          return null;
        }
      });
  }

  _mastheadRequest = (token, method, url) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.setRequestHeader("Authorization", `BEARER ${token}`);
    request.setRequestHeader("accept", "application/json");
    return new Promise((resolve, reject) => {
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          resolve(request);
        }
      };
      request.send();
    });
  }






  _processNav(menu) {
    const flatMenu = new Map();
    menu.forEach(menu => this._flattenMenu(menu, flatMenu));
    this.setState({
      flatMenu
    });
  }

  _flattenMenu(item, container) {
    container.set(item._id, item);
    if (item.menu && item.menu.length !== 0) {
      item.menu.forEach(menu => {
        this._flattenMenu(menu, container);
      });
    }
  }

  _changeMenuState(index, id) {
    let output = [...this.state.menuState].slice(0, index + 1);
    if (output[index] === id) {
      output = output.slice(0, index);
    } else {
      output[index] = id;
    }
    this.setState({
      menuState: output
    });
  }

  _moveBackOneMenu(event) {
    event.nativeEvent.stopImmediatePropagation();
    if (this.state.menuState.length > 0) {
      this._changeMenuState(this.state.menuState.length - 1, this.state.menuState[this.state.menuState.length - 1]);
    }
  }

  _getMenuTitle() {
    const currentMenu = this.state.menuState[this.state.menuState.length - 1];
    if (this.state.flatMenu.get(currentMenu)) {
      return this.state.flatMenu.get(currentMenu).title;
    }
    return null;
  }

  handleSuggestionClick(menuState) {
    this.setState({
      menuState
    });
  }

  render() {
    
    if (this.state.data === null) return <div></div>;
    const { data: { menu }, menuState, theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <S.Container>
          <S.Header>

            <S.HeaderRow>
              {theme.name === "light" ?
                <S.Logo alt="Logo" src={logoLight} />
                :
                <S.Logo alt="Logo" src={logoDark} />
              }

              <MastheadSearch
                items={menu}
                handleSuggestionClick={menuState => this.handleSuggestionClick(menuState)}
              />
            </S.HeaderRow>

            <S.MenuTitle>
              {menuState.length !== 0 &&
                <button onClick={event => this._moveBackOneMenu(event)}>
                  <i className="material-icons">chevron_left</i>
                  {this._getMenuTitle()}
                </button>}
            </S.MenuTitle>

          </S.Header>
          <S.Main>
            <TransitionGroup className="masthead-transition-group">
              <CSSTransition
                timeout={constants.menuTransition}
                classNames="masthead">
                <MastheadList
                  depth={0}
                  items={menu}
                  menuState={menuState}
                  _changeMenuState={(index, id) => this._changeMenuState(index, id)}
                />
              </CSSTransition>
            </TransitionGroup>
          </S.Main>
        </S.Container>
      </ThemeProvider>
    );
  }
}
