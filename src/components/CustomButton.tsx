import React, { FunctionComponent, ReactNode } from "react";
import { Button } from "antd";
import classes from "./CustomButton.module.css";

const CustomButton: FunctionComponent<{
  children: ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <Button
      type="text"
      className={classes.card}
      onClick={() => onClick && onClick()}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
