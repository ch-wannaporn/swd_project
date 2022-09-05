import React, { FunctionComponent, ReactNode } from "react";
import classes from "./RoundedButton.module.css";
import { Button } from "antd";

const RoundedButton: FunctionComponent<{
  children: ReactNode;
  onClick?: () => void;
  title?: string;
}> = ({ children, onClick, title }) => {
  return (
    <Button
      type="text"
      className={classes["rounded-btn"]}
      onClick={() => onClick && onClick()}
    >
      {title && <label className={classes.label}>{title}</label>}
      {children}
    </Button>
  );
};

export default RoundedButton;
