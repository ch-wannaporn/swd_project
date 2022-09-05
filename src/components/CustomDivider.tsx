import React from "react";
import { Col, Divider, Row } from "antd";

const CustomDivider = () => {
  return (
    <Row justify="center">
      <Col span={16}>
        <Divider />
      </Col>
    </Row>
  );
};

export default CustomDivider;
