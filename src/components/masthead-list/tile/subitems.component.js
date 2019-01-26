import React from "react";
import S from "./../../../styles/styles";

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
    <S.SubItems className="muted">
      {subItemLabel(menu)} <i className="material-icons">chevron_right</i>
    </S.SubItems>
  );
}

export default SubItems;
