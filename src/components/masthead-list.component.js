import React, { Fragment, Children } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as constants from "./../shared/constants";

export default class MastheadList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subItems: []
    };
  }

  componentWillReceiveProps(nextProps) {
    for (let i = 0; i < nextProps.items.length; i++) {
      if (nextProps.items[i]._id === nextProps.menuState[nextProps.depth]) {
        this.setState({
          subItems: nextProps.items[i].menu
        });
        return;
      }
    }
    this.setState({
      subItems: []
    });
  }

  _handleClick(index, id, event) {
    event.nativeEvent.stopImmediatePropagation();
    this.props._changeMenuState(index, id);
  }

  render() {
    const items = this.props.items
      .map((item) =>
        <Tile
          depth={this.props.depth}
          key={item._id}
          {...item}
          _handleClick={(index, id, event) => this._handleClick(index, id, event)}
        />
      );

    return (
      <Fragment>
        <div className="masthead-background">
          <MastheadListGroup>
            {items}
          </MastheadListGroup>
        </div>
        <TransitionGroup className="masthead-transition-group">
          {this.state.subItems.length !== 0 &&
            <CSSTransition
              timeout={constants.menuTransition}
              classNames="masthead">
              <MastheadList
                items={this.state.subItems}
                depth={this.props.depth + 1}
                menuState={this.props.menuState}
                _changeMenuState={(index, id) => this.props._changeMenuState(index, id)}
              />
            </CSSTransition>
          }
        </TransitionGroup>
      </Fragment>
    );
  }
}

const MastheadListGroup = (props) => {
  const count = Children.count(props.children);
  return (
    <div className={`masthead-items children-${count}`}>
      {props.children}
    </div>
  );
}

const Tile = (props) => {
  return props.menu && props.menu.length !== 0
    ?
    <button className="masthead-tile" onClick={(event) => props._handleClick(props.depth, props._id, event)}>
      <MastheadItem {...props} />
      <MastheadSubItems menu={props.menu} />
    </button>
    :
    <a className="masthead-tile" href={props.url} target="_blank" rel="noopener noreferrer">
      <MastheadItem {...props} />
    </a>
}

const MastheadItem = (props) => {
  return (
    <div className="tile-wrap">
      <i className="material-icons icon">{props.icon}</i>
      <div className="title text-overflow">{props.title}</div>
    </div>
  );
}

const MastheadSubItems = (props) => {
  const menu = props.menu;
  const subItemCount = menu.length;
  const subItemLabel = (menu) => {
    switch (subItemCount) {
      case 1:
        return menu[0].title;
      case 2:
        return `${menu[0].title} and ${menu[1].title}`;
      default:
        return `${menu[0].title}, ${menu[1].title} and ${subItemCount - 2} more`
    }
  }

  return (
    <div className="masthead-subitems text-overflow muted">
      {subItemLabel(menu)} <i className="material-icons">chevron_right</i>
    </div>
  );
}
