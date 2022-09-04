import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../components/CustomButton";
import CustomLayout from "../components/CustomLayout";

const TranslationPage: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <CustomLayout>
      <CustomButton>
        <b>{t("Test {{number}}", { number: 1 })}</b>
        <p>{t("Layout & Style")}</p>
      </CustomButton>
      <CustomButton>
        <b>{t("Test {{number}}", { number: 2 })}</b>
        <p>{t("Connect API")}</p>
      </CustomButton>
      <CustomButton>
        <b>{t("Test {{number}}", { number: 3 })}</b>
        <p>{t("Form & Table")}</p>
      </CustomButton>
    </CustomLayout>
  );
};

export default TranslationPage;
