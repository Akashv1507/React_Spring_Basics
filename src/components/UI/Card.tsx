import React from "react";

import classes from "./Card.module.css";

interface ICardsProps {
  children?: React.ReactNode;
  className: string;
}
const Card: React.FC<ICardsProps> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
