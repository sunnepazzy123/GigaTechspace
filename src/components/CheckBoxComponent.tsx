import React from "react";
import { ComponentData } from "./App";

interface CheckBoxComponentProp {
  component: ComponentData;
}

const CheckBoxComponent: React.FC<CheckBoxComponentProp> = ({ component }) => {
  const letter = component.letter.trim() || "Empty";
  return (
    <div className="component">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>Checkbox Component {component.id + 1} </h5>
        <p style={{ textAlign: "center" }}>Letter: {letter}</p>
      </div>
    </div>
  );
};

export default CheckBoxComponent;
