import React from "react";

const Item = (props) => {
  const { icon, title } = props;
  return (
    <div className="tile-wrap">
      <i className="material-icons icon">{icon}</i>
      <div className="title text-overflow">{title}</div>
    </div>
  );
}

export default Item;
