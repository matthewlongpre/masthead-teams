import React from "react";

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

export default Tile;
