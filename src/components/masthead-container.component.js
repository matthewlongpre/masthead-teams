import React, { Component } from 'react';
import data from './../mock-data';
import logo from './../logo.svg';
import './../styles.css'
import MastheadList from './masthead-list.component';
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

  render() {
    const { data, menuState } = this.state;

    let menu = data.menu;

    return (
      <div className="masthead-container">
        <header className="masthead-header">
          <img className="logo" src={logo} />
        </header>
        <MastheadList
          depth={0}
          items={menu}
          menuState={menuState}
          _changeMenuState={(index, id) => this._changeMenuState(index, id)}
        />
      </div>
    );
  }
}
