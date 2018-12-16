import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as constants from "./../shared/constants";
import data from './../mock-data';
import logo from './../logo.svg';
import './../styles.css'
import MastheadList from './masthead-list.component';
import MastheadSearch from "./masthead-search.component";
import * as microsoftTeams from "@microsoft/teams-js";
microsoftTeams.initialize();

export default class MastheadContainer extends Component {
  state = {
    data: data,
    flatMenu: new Map(),
    menuState: []
  }

  componentDidMount() {
    this._processNav(data.menu);
  }

  _processNav(menu) {
    const flatMenu = new Map();
    menu.forEach(menu => this._flattenMenu(menu, flatMenu));
    this.setState({
      flatMenu: flatMenu
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


  render() {
    const { data, menuState, flatMenu } = this.state;

    let menu = data.menu;

    return (
      <div className="masthead-container">
        <header className="masthead-header">
          <img alt="Logo" className="logo" src={logo} />
          <MastheadSearch items={menu} />

          {menuState.length !== 0 &&
          <button className="menu-title" onClick={(event) => this._moveBackOneMenu(event)}>
            <i className="material-icons">chevron_left</i>
            {this._getMenuTitle()}
          </button>}
        </header>
        <main className="masthead-content">
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
        </main>
      </div>
    );
  }
}
