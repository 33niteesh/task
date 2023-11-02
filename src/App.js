import { useEffect, useState } from 'react';
import './App.css';
import { connect } from "react-redux";
import { data, setdata,edittask, delettask, addtask } from './redux/store/actions';
import axios from 'axios';
function App({setdata,data,task,edittask,delettask,addtask}) {
  const [tasks,setTasks]=useState({id:"",task:"",status:false});
  const [user,setUser]=useState({username:"",password:""})
  useEffect(()=>{
      axios.get(`${process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE}/data`).then(e=>setdata(e.data)).then(setTasks(task.state))
  },[])

  const add=(tasks)=>{
    if(tasks.task==""){
      alert("please enter task")
    }
    else{
      addtask({id:task.length,task:tasks.task,status:"notcompleted"})
      setTasks({id:"",task:"",status:false})}
    }
  return (
    <div className="App">
       {
        user.username=="NITEESH" && user.password=="1216" ?
        <>
        <table>
        <th>id</th><th>task</th><th>status</th>
        {task.state?.map((i,j)=>{
          return(
            <tr>
              <td>{i.id}</td>
              <td>{i.task}</td>
              {i.status=="completed"?<td className="yes">{i.status}</td>:<td className="no">{i.status}</td>}
              <td onClick={()=>delettask(i.id)} className={task.state?.length==1 ? 'delete':""}>🗑️</td>
              <td onClick={()=>edittask({id:i?.id,task:i?.task,status:!i?.status})}>✏️</td>
            </tr>
          )
        })}
        </table>
        <br></br>
       <>add task</>
       <input onChange={(e)=>setTasks({id:tasks?.id,task:e.target.value,status:tasks?.status})} placeholder={tasks?.task}/>
       <button onClick={()=>add(tasks)}>send</button>
        </>:<>   <>Login</>  <input type="name" onChange={e=>setUser({username:e.target.value,password:user.password})}/>
      <input type="password" onChange={e=>setUser({username:user.username,password:e.target.value})}/>
      
      </>
       }

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    task: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    data: () => dispatch(data()),
    setdata:(e)=> dispatch(setdata(e)),
    edittask:(e)=>dispatch(edittask(e)),
    delettask:(e)=>dispatch(delettask(e)),
    addtask:(e)=>dispatch(addtask(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
