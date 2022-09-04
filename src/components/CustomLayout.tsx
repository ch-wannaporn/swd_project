import React, { FunctionComponent, ReactNode } from "react";
import classes from "./CustomLayout.module.css";
import LanguageSelector from "./LanguageSelector";

const CustomLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className={classes.bg}>
      <div className={classes.header}>
        <LanguageSelector />
      </div>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default CustomLayout;
