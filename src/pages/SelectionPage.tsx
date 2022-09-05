import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import classes from "./SelectionPage.module.css";
import CustomButton from "../components/CustomButton";
import CustomLayout from "../components/CustomLayout";
import { Col, Layout, Row } from "antd";

const SelectionPage: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <CustomLayout>
      <Layout className={classes.layout}>
        <Row justify="center" gutter={15}>
          <Col span={4}>
            <CustomButton onClick={() => navigate("/layout-style")}>
              <b>{t("Test {{number}}", { number: 1 })}</b>
              <p>{t("Layout & Style")}</p>
            </CustomButton>
          </Col>
          <Col span={4}>
            <CustomButton>
              <b>{t("Test {{number}}", { number: 2 })}</b>
              <p>{t("Connect API")}</p>
            </CustomButton>
          </Col>
          <Col span={4}>
            <CustomButton>
              <b>{t("Test {{number}}", { number: 3 })}</b>
              <p>{t("Form & Table")}</p>
            </CustomButton>
          </Col>
        </Row>
      </Layout>
    </CustomLayout>
  );
};

export default SelectionPage;
