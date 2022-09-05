import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomLayout from "../components/CustomLayout";
import classes from "./LayoutAndStylePage.module.css";
import { Layout } from "antd";
import ControlButtons from "../components/ControlButtons";
import CustomDivider from "../components/CustomDivider";
import MovingButtons from "../components/MovingButtons";
import TrapezoidIcon from "../components/Icons/TrapezoidIcon";
import SquareIcon from "../components/Icons/SquareIcon";
import CircleIcon from "../components/Icons/CircleIcon";
import EllipseIcon from "../components/Icons/EllipseIcon";
import RectangleIcon from "../components/Icons/RectangleIcon";
import ParallelogramIcon from "../components/Icons/ParallelogramIcon";

const LayoutAndStylePage: FunctionComponent = () => {
  const { t } = useTranslation();
  const [shapes, setShapes] = useState([
    [<SquareIcon />, <CircleIcon />, <EllipseIcon />],
    [<TrapezoidIcon />, <RectangleIcon />, <ParallelogramIcon />],
  ]);
  const [isRightAlign, setIsRightAlign] = useState(0);

  return (
    <CustomLayout title={t("Layout & Style")}>
      <Layout className={classes.layout}>
        <ControlButtons
          setShapes={setShapes}
          setIsRightAlign={setIsRightAlign}
        />
        <CustomDivider />
        <MovingButtons
          shapes={shapes}
          isRightAlign={isRightAlign}
          setShapes={setShapes}
        />
      </Layout>
    </CustomLayout>
  );
};

export default LayoutAndStylePage;
