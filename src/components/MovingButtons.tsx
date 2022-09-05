import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Row, Col } from "antd";
import RoundedButton from "./RoundedButton";

const MovingButtons: FunctionComponent<{
  shapes: Array<Array<JSX.Element>>;
  isRightAlign: number;
  setShapes: Dispatch<SetStateAction<Array<Array<JSX.Element>>>>;
}> = ({ shapes, isRightAlign, setShapes }) => {
  const shuffle = (rows: JSX.Element[][]) => {
    const tempShapes = [...rows[0], ...rows[1]];

    for (let i = tempShapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempShapes[i], tempShapes[j]] = [tempShapes[j], tempShapes[i]];
    }

    const firstRow = tempShapes.slice(0, 3);
    const secondRow = tempShapes.slice(3);

    return [firstRow, secondRow];
  };

  return (
    <>
      {shapes[0] && (
        <Row
          justify={isRightAlign === 0 ? "start" : "center"}
          gutter={10}
          style={{ marginBottom: 10 }}
        >
          <Col span={4} offset={isRightAlign === 0 ? 8 : 0}>
            <RoundedButton
              onClick={() =>
                setShapes((shapes: JSX.Element[][]) => shuffle(shapes))
              }
            >
              {shapes[0][0]}
            </RoundedButton>
          </Col>
          <Col span={4}>
            <RoundedButton
              onClick={() =>
                setShapes((shapes: JSX.Element[][]) => shuffle(shapes))
              }
            >
              {shapes[0][1]}
            </RoundedButton>
          </Col>
          <Col span={4}>
            <RoundedButton
              onClick={() =>
                setShapes((shapes: JSX.Element[][]) => shuffle(shapes))
              }
            >
              {shapes[0][2]}
            </RoundedButton>
          </Col>
        </Row>
      )}
      {shapes[1] && (
        <Row
          justify={isRightAlign === 1 ? "start" : "center"}
          gutter={10}
          style={{ marginBottom: 8 }}
        >
          <Col span={4} offset={isRightAlign === 1 ? 8 : 0}>
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
    </>
  );
};

export default MovingButtons;
