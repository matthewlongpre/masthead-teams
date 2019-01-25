import React, { Children } from "react";

const MastheadListGroup = (props) => {
  const { children } = props;
  const count = Children.count(children);
  return (
    <div className={`masthead-items children-${count}`}>
      {children}
    </div>
  );
}

export default MastheadListGroup;
