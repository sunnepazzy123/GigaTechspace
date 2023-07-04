import React from "react";
import { ComponentData } from "./App";

interface CheckBoxComponentProp {
  components: ComponentData[];
  item: number
}

const CheckBoxComponent: React.FC<CheckBoxComponentProp> = ({ components, item }) => {
  const result = components.find((component) => component.id === item)!
  
  return (
    <div className="component">
      <div style={{ display: "flex", flexDirection: "column", padding: '10px', textAlign: 'center' }}>
        <h5>Checkbox Component {item + 1} </h5>
        <p style={{ wordBreak: "break-word" }}>{result?.letter}</p>
      </div>
    </div>
  );
};

export default CheckBoxComponent;
