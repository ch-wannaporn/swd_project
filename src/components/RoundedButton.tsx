import React, { FunctionComponent, ReactNode } from "react";
import classes from "./RoundedButton.module.css";
import { Button } from "antd";

const RoundedButton: FunctionComponent<{
  children: ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <Button
      type="text"
      className={classes["rounded-btn"]}
      onClick={() => onClick && onClick()}
    >
      {children}
    </Button>
  );
};

export default RoundedButton;
