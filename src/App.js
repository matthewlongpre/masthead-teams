import React, { Component, Fragment } from 'react';
import data from './mock-data';
import logo from './logo.svg';
import './styles.css'
import * as microsoftTeams from "@microsoft/teams-js";
microsoftTeams.initialize();

class MastheadContainer extends Component {
  state = {
    data: data
  }
  render() {
    const { data } = this.state;
    const items = data.menu.map(item => <Tile key={item._id} {...item} />);
    return (
      <div className="masthead-container">
        <header className="masthead-header">
          <img className="logo" src={logo} />
        </header>
        <div className="masthead-items">
          {items}
        </div>
      </div>
    );
  }
}

const Tile = (props) => {
  return props.menu && props.menu.length !== 0
    ?
    <button className="masthead-tile">
      <MastheadItem {...props} />
    </button>
    :
    <a className="masthead-tile" href="">
      <MastheadItem {...props} />
    </a>
}

const MastheadItem = (props) => {
  return (
    <Fragment>
      <i className="material-icons icon">{props.icon}</i>
      <div className="title text-overflow">{props.title}</div>
    </Fragment>
  );
}



export default MastheadContainer;
