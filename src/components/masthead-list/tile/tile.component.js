import React from "react";
import Item from "./item/item.component";
import SubItems from "./subitems/subitems.component";

const Tile = (props) => {
  const { menu, url, depth, _id, _handleClick } = props;
  return menu && menu.length !== 0
    ?
    <button className="masthead-tile" onClick={(event) => _handleClick(depth, _id, event)}>
      <Item {...props} />
      <SubItems menu={menu} />
    </button>
    :
    <a className="masthead-tile" href={url} target="_blank" rel="noopener noreferrer">
      <Item {...props} />
    </a>
}

export default Tile;
