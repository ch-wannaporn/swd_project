import React, { FunctionComponent, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./LanguageSelector.module.css";
import { Select } from "antd";

const { Option } = Select;

const LanguageSelector: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language);

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelected(t(i18n.language.toUpperCase()));
  };

  return (
    <Select
      defaultValue="en"
      value={selected}
      onChange={handleChange}
      className={classes.select}
    >
      <Option value="en">{t("EN")}</Option>
      <Option value="th">{t("TH")}</Option>
    </Select>
  );
};

export default LanguageSelector;
