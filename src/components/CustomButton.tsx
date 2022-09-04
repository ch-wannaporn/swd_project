import React, { FunctionComponent, ReactNode } from "react";
import { Button } from "antd";
import classes from "./CustomButton.module.css";

const CustomButton: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Button type="text" className={classes.card}>
      {children}
    </Button>
  );
};

export default CustomButton;
