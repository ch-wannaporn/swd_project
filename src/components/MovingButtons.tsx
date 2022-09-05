import React, { FunctionComponent } from "react";
import { Row, Col, Space } from "antd";
import RoundedButton from "./RoundedButton";

const MovingButtons: FunctionComponent<{
  shapes: Array<Array<JSX.Element>>;
}> = ({ shapes }) => {
  return (
    <Space direction={"vertical"} size={10}>
      {shapes[0] && (
        <Row justify="start" gutter={10}>
          <Col span={4} offset={8}>
            <RoundedButton>{shapes[0][0]}</RoundedButton>
          </Col>
          <Col span={4}>
            <RoundedButton>{shapes[0][1]}</RoundedButton>
          </Col>
          <Col span={4}>
            <RoundedButton>{shapes[0][2]}</RoundedButton>
          </Col>
        </Row>
      )}
      {shapes[1] && (
        <Row justify="center" gutter={10}>
          <Col span={4}>
            <RoundedButton>{shapes[1][0]}</RoundedButton>
          </Col>
          <Col span={4}>
            <RoundedButton>{shapes[1][1]}</RoundedButton>
          </Col>
          <Col span={4}>
            <RoundedButton>{shapes[1][2]}</RoundedButton>
          </Col>
        </Row>
      )}
    </Space>
  );
};

export default MovingButtons;
