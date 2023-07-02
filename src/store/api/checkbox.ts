import { ComponentData, } from "../../components/App";
import {
  getCheckBoxComponentStart, 
  getCheckBoxComponentFailure, 
  getCheckBoxComponentSuccess, 
  deleteCheckBoxComponentStart, 
  deleteCheckBoxComponentSuccess,
  clearComponentsStart, 
  clearComponentsSuccess,
   clearComponentsFailure,
} from "../reducers/checkbox.reducer";
import { request } from "./config/request";


export interface IResponse {
  letter: string,
  letter_index: number
}



export const getIdCheckboxComponentAction = async (dispatch: any, id: number) => {
  dispatch(getCheckBoxComponentStart());
  try {
    const { data } = await request.get<IResponse>(`/letters/${id}`);
    dispatch(getCheckBoxComponentSuccess({id, ...data}));
  } catch (err: any) {
    dispatch(getCheckBoxComponentFailure(err.message));
  }
};



export const deleteIdCheckboxComponentAction = async (dispatch: any, id: number, components: ComponentData[]) => {
   dispatch(deleteCheckBoxComponentStart());
  try {
    const filtered = components.filter((component)=> component.id !== id)
    dispatch(deleteCheckBoxComponentSuccess(filtered));

  } catch (err: any) {
    dispatch(getCheckBoxComponentFailure(err.message));
  }
};

export const clearCheckboxComponentsAction = (dispatch: any) => {
  dispatch(clearComponentsStart());
 try {
   dispatch(clearComponentsSuccess([]));
 } catch (err: any) {
   dispatch(clearComponentsFailure(err.message));
 }
};
