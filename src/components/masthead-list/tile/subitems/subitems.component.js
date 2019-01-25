import React from "react";

const SubItems = (props) => {
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

export default SubItems;
