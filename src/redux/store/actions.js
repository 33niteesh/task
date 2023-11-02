import { DATA,ADDTASK,DELETTASK,EDITTASK,SETDATA } from "./actiontype";

export const data = () => {
  return {
    type: DATA
  };
};

export const addtask = (data) => {
  return {
    type: ADDTASK,
    payload:data
  };
};
export const edittask = (e) => {
    return {
      type: EDITTASK,
      payload:e
    };
  };
export const delettask = (id) =>{
    return {
        type: DELETTASK,
        payload:id
    };
};
export const setdata = (data) =>{
    return {
        type: SETDATA,
        payload:data
    };
}