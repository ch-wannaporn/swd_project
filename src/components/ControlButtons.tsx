import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import RoundedButton from "./RoundedButton";
import { useTranslation } from "react-i18next";

const ControlButtons: FunctionComponent<{
  setShapes: Dispatch<SetStateAction<Array<Array<JSX.Element>>>>;
  setIsRightAlign: Dispatch<SetStateAction<number>>;
}> = ({ setShapes, setIsRightAlign }) => {
  const { t } = useTranslation();

  const onLeftClickHandler = () => {
    setShapes((shapes: JSX.Element[][]) => {
      const firstElementOnFirstRow = shapes[0][0];
      const firstElementOnSecondRow = shapes[1][0];

      const firstRow = shapes[0].slice(1);
      firstRow.push(firstElementOnSecondRow);
      const secondRow = shapes[1].slice(1);
      secondRow.push(firstElementOnFirstRow);

      return [firstRow, secondRow];
    });
  };

  const onRightClickHandler = () => {
    setShapes((shapes: JSX.Element[][]) => {
      const lastElementOnFirstRow = shapes[0][2];
      const lastElementOnSecondRow = shapes[1][2];

      const firstRow = [lastElementOnSecondRow, ...shapes[0]];
      const secondRow = [lastElementOnFirstRow, ...shapes[1]];

      return [firstRow, secondRow];
    });
  };

  const onUpAndDownClickHandler = () => {
    setIsRightAlign((index: number) => (index === 0 ? 1 : 0));
  };

  return (
    <Row justify="center" gutter={10}>
      <Col span={4}>
        <RoundedButton onClick={onLeftClickHandler} title={t("Move shape")}>
          <CaretLeftOutlined style={{ fontSize: "150px", color: "#878787" }} />
        </RoundedButton>
      </Col>
      <Col span={8}>
        <RoundedButton
          onClick={onUpAndDownClickHandler}
          title={t("Move position")}
        >
          <CaretUpOutlined style={{ fontSize: "150px", color: "#878787" }} />
          <CaretDownOutlined style={{ fontSize: "150px", color: "#878787" }} />
        </RoundedButton>
      </Col>
      <Col span={4}>
        <RoundedButton onClick={onRightClickHandler} title={t("Move shape")}>
          <CaretRightOutlined style={{ fontSize: "150px", color: "#878787" }} />
        </RoundedButton>
      </Col>
    </Row>
  );
};

export default ControlButtons;
