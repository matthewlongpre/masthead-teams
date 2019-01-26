import React, { Children } from "react";
import S from "./../../styles/styles";

const ListGroup = (props) => {
  const { children } = props;
  const count = Children.count(children);
  return (
    <S.Items className={`children-${count}`}>
      {children}
    </S.Items>
  );
}

export default ListGroup;
