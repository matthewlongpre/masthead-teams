import React, { Fragment, Children } from "react";
import memoize from "memoize-one";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as constants from "../../shared/constants";

export default class MastheadList extends React.Component {

  _handleClick(index, id, event) {
    event.nativeEvent.stopImmediatePropagation();
    this.props._changeMenuState(index, id);
  }

  _getSubItems = memoize(
    (items, menuState, depth) => {
      let subItems = [];
      items.forEach(item => {
        if (item._id === menuState[depth]) {
            subItems = item.menu
        }
      });
      return subItems;
    }
  );

  render() {

    const { depth, items, menuState, _changeMenuState } = this.props;

    const subItems = this._getSubItems(items, menuState, depth);

    const tiles = items
      .map((item) =>
        <Tile
          depth={depth}
          key={item._id}
          {...item}
          _handleClick={(index, id, event) => this._handleClick(index, id, event)}
        />
      );

    return (
      <Fragment>
        <div ref={divElement => this.divElement = divElement} className="masthead-background">
          <MastheadListGroup>
            {tiles}
          </MastheadListGroup>
        </div>
        <TransitionGroup className="masthead-transition-group">
          {subItems.length !== 0 &&
            <CSSTransition
              timeout={constants.menuTransition}
              classNames="masthead">
              <MastheadList
                items={subItems}
                depth={depth + 1}
                menuState={menuState}
                _changeMenuState={(index, id) => _changeMenuState(index, id)}
              />
            </CSSTransition>
          }
        </TransitionGroup>
      </Fragment>
    );
  }
}

const MastheadListGroup = (props) => {
  const { children } = props;
  const count = Children.count(children);
  return (
    <div className={`masthead-items children-${count}`}>
      {children}
    </div>
  );
}

const Tile = (props) => {
  const { menu, url, depth, _id, _handleClick } = props;
  return menu && menu.length !== 0
    ?
    <button className="masthead-tile" onClick={(event) => _handleClick(depth, _id, event)}>
      <MastheadItem {...props} />
      <MastheadSubItems menu={menu} />
    </button>
    :
    <a className="masthead-tile" href={url} target="_blank" rel="noopener noreferrer">
      <MastheadItem {...props} />
    </a>
}

const MastheadItem = (props) => {
  const { icon, title } = props;
  return (
    <div className="tile-wrap">
      <i className="material-icons icon">{icon}</i>
      <div className="title text-overflow">{title}</div>
    </div>
  );
}

const MastheadSubItems = (props) => {
  const { menu } = props;
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
