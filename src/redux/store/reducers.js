import { DATA,ADDTASK,EDITTASK,DELETTASK,SETDATA} from "./actiontype";
import axios from "axios";
var data = [];
const IncReducers = (state = data, action) => {
  switch (action.type) {
      case DATA:
      return {
        state
      };
      case ADDTASK:
        axios.post(`${process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE}/data`,{task:action.payload.task,status:action.payload.status})
        data=state.state;
        let uuid=0;
        if(data.length==0){
          uuid=0;
        }
        else{
          uuid=data[data.length-1]?.id+1;
        }
        data.push({id:uuid,task:action.payload.task,status:action.payload.status})
      return {
        state:data,
      };
      case SETDATA:
        data=action.payload
      return {
        state:action.payload,
      };
      case EDITTASK:
        let s="notcompleted"
        if(action.payload.status==false){
          s="completed"
        }
        axios.put(`${process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE}/data/${action.payload.id}`,{task:action.payload.task,status:s})
        let d=[]
        for(let k=0;k<data.length;k++){
          if(data[k].id!=action.payload.id){
            d.push(data[k])
          }
        }
        data=d
        d.push({id:action.payload.id,task:action.payload.task,status:s})
        return{
          state:data
        }
      case DELETTASK:
        axios.delete(`${process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE}/data/${action.payload}`)
        let f=[]
        for(let k=0;k<data.length;k++){
          if(data[k].id!=action.payload){
            f.push(data[k])
          }
        }
        data=f
        return{
          state:data
        }
    
    default:
      return state;
  }
};

export default IncReducers;
