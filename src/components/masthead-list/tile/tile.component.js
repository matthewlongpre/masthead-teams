import React from "react";
import Item from "./item.component";
import SubItems from "./subitems.component";
import S from "./../../../styles/styles";

const Tile = (props) => {
  const { menu, url, depth, _id, _handleClick } = props;
  return menu && menu.length !== 0
    ?
    <S.Tile className="masthead-tile" onClick={(event) => _handleClick(depth, _id, event)}>
      <Item {...props} />
      <SubItems menu={menu} />
    </S.Tile>
    :
    <S.Tile className="masthead-tile" href={url} target="_blank" rel="noopener noreferrer">
      <Item {...props} />
    </S.Tile>
}

export default Tile;
