import React, { useEffect } from "react";
import "./App.scss";
import CheckBoxComponent from "./CheckBoxComponent";
import CheckBox from "./CheckBox";
import { CheckboxState } from "../store/reducers/checkbox.reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  IResponse,
  clearCheckboxComponentsAction,
  deleteIdCheckboxComponentAction,
  getIdCheckboxComponentAction,
} from "../store/actions/checkbox";
import "semantic-ui-css/semantic.min.css";

export interface ComponentData extends IResponse {
  id: number;
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { checkboxes, components, } = useSelector<
    any,
    CheckboxState
  >((state) => state.checkbox);

  useEffect(() => {
    const interval = setIntervalComponent(2000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckboxToggle = (checkboxNumber: number) => {
    if (components.some((component) => component.id === checkboxNumber)) {
      deleteIdCheckboxComponentAction(dispatch, checkboxNumber, components);
      return;
    }

    getIdCheckboxComponentAction(dispatch, checkboxNumber);
  };

  const clearHandler = () => {
    clearCheckboxComponentsAction(dispatch);
  };

  const setIntervalComponent = (seconds: number) => {
    const interval = setInterval(() => {
      for (let i = 0; i <= 6; i++) {
        getIdCheckboxComponentAction(dispatch, i);
      }
    }, seconds);
    return interval;
  };

  return (
    <div className="app">
      <h2>GigaTechspace Task</h2>
      <div className="checkboxes">
        {checkboxes.map((checkboxNumber) => (
          <CheckBox
            key={checkboxNumber}
            checkboxNumber={checkboxNumber}
            handleCheckboxToggle={handleCheckboxToggle}
            components={components}
          />
        ))}
        <div>
          <button
            className="ui primary basic button"
            onClick={() => clearHandler()}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="components">
        {checkboxes.map((item, key) => (
          <CheckBoxComponent components={components} key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
