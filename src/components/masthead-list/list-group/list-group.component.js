import React, { Children } from "react";

const ListGroup = (props) => {
  const { children } = props;
  const count = Children.count(children);
  return (
    <div className={`masthead-items children-${count}`}>
      {children}
    </div>
  );
}

export default ListGroup;
