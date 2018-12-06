import React, { Component, Fragment } from 'react';
import data from './mock-data';
import logo from './logo.svg';
import './styles.css'
import * as microsoftTeams from "@microsoft/teams-js";
microsoftTeams.initialize();

class MastheadContainer extends Component {
  state = {
    data: data,
    // menuState: []
    // flatMenu: new Map(),
    // menuState: []
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
    let output = [... this.state.menuState].slice(0, index + 1);
    if (output[index] === id) {
      output = output.slice(0, index);
    } else {
      output[index] = id;
    }
    this.setState({
      menuState: output
    });
  }

  // _changeMenuState(index, id) {
  //   this.setState({
  //     menuState: [index, id]
  //   });
  // }

  render() {
    const { data, menuState } = this.state;

    let menu = data.menu;

    return (
      <div className="masthead-container">
        <header className="masthead-header">
          <img className="logo" src={logo} />
        </header>
        <MastheadList depth={0} items={menu} _changeMenuState={(index, id) => this._changeMenuState(index, id)} />
      </div>
    );
  }
}

class MastheadList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subitems: []
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   for (let i = 0; i < nextProps.items.length; i++) {
  //     if (nextProps.items[i]._id === nextProps.menuState[nextProps.depth]) {
  //       this.setState({
  //         subItems: nextProps.items[i].menu
  //       });
  //       return;
  //     }
  //   }
  //   this.setState({
  //     subItems: []
  //   });
  // }

  _handleClick(index, id, event) {
    console.log(index, id, event);
    event.nativeEvent.stopImmediatePropagation();
    this.props._changeMenuState(index, id);
  }

  render() {
    const items = this.props.items.map((item, index) => <Tile index={index} key={item._id} {...item} _handleClick={(index, id, event) => this._handleClick(index, id, event)} />);

    return (
      <div className="masthead-items">
        {items}
      </div>
    );
  }
}

const Tile = (props) => {
  return props.menu && props.menu.length !== 0
    ?
    <button className="masthead-tile" onClick={(event) => props._handleClick(props.depth, props._id, event)}>
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
