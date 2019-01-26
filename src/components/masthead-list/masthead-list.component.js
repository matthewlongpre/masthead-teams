import React from "react";
import memoize from "memoize-one";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Tile from "./tile/tile.component";
import ListGroup from "./list-group.component";
import * as constants from "../../shared/constants";
import S from "./../../styles/styles";

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

  itemContainer = null;

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
      <>
        <S.Background>
          <ListGroup>
            {tiles}
          </ListGroup>
        </S.Background>

        <TransitionGroup className="masthead-transition-group" >

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
      </>
    );
  }
}
