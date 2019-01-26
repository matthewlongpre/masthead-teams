import React from "react";
import S from "./../../../styles/styles";

const Item = (props) => {
  const { icon, title } = props;
  return (
    <S.Item>
      <S.Icon className="material-icons icon">{icon}</S.Icon>
      <S.Title className="title">{title}</S.Title>
    </S.Item>
  );
}

export default Item;
