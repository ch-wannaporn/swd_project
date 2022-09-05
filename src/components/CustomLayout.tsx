import React, { FunctionComponent, ReactNode } from "react";
import classes from "./CustomLayout.module.css";
import LanguageSelector from "./LanguageSelector";

const CustomLayout: FunctionComponent<{
  children: ReactNode;
  title?: string;
}> = ({ children, title }) => {
  return (
    <div className={classes.bg}>
      <h1 className={classes["title"]}>{title}</h1>
      <div className={classes["select-container"]}>
        <LanguageSelector />
      </div>
      {children}
    </div>
  );
};

export default CustomLayout;
