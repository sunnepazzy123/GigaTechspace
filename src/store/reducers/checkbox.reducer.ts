import { createSlice } from "@reduxjs/toolkit";
import { ComponentData } from "../../components/App";

export interface CheckboxState {
  components: ComponentData[];
  checkboxes: number[];
  componentList: IComponentList;
  isFetching: boolean;
  error: null | string;
}

export interface IComponentList {
  [key: string]: ComponentData[];
}

const mergeComponentList = (componentList: IComponentList) => {
  const arr = [] as ComponentData[];
  for (const key in componentList) {
    const slice = componentList[key].slice(-30);
    arr.push(...slice);
  }
  return arr;
};

const checkBoxSlice = createSlice({
  name: "checkbox",
  initialState: {
    components: [] as ComponentData[],
    checkboxes: [0, 1, 2, 3, 4, 5, 6],
    componentList: {
      component0: [] as ComponentData[],
      component1: [] as ComponentData[],
      component2: [] as ComponentData[],
      component3: [] as ComponentData[],
      component4: [] as ComponentData[],
      component5: [] as ComponentData[],
      component6: [] as ComponentData[],
    } as IComponentList,
    isFetching: false,
    error: null,
  } as CheckboxState,
  reducers: {
    getCheckBoxComponentStart: (state) => {
      state.isFetching = true;
    },
    getCheckBoxComponentSuccess: (state, action) => {
      state.componentList[`component${action.payload.id}`].push(action.payload);
      state.components = mergeComponentList(state.componentList);
      state.isFetching = false;
    },
    getCheckBoxComponentFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },

    deleteCheckBoxComponentStart: (state) => {
      state.isFetching = true;
    },
    deleteCheckBoxComponentSuccess: (state, action) => {
      state.components = action.payload;
      state.isFetching = false;
    },
    deleteCheckBoxComponentFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    clearComponentsStart: (state) => {
      state.isFetching = true;
    },
    clearComponentsSuccess: (state, action) => {
      state.components = action.payload;
      state.isFetching = false;
    },
    clearComponentsFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const {
  getCheckBoxComponentStart,
  getCheckBoxComponentFailure,
  getCheckBoxComponentSuccess,
  deleteCheckBoxComponentStart,
  deleteCheckBoxComponentSuccess,
  deleteCheckBoxComponentFailure,
  clearComponentsStart,
  clearComponentsSuccess,
  clearComponentsFailure,
} = checkBoxSlice.actions;
export default checkBoxSlice.reducer;
