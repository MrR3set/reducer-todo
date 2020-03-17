import React from 'react';

const Task = props => {
  return (
    <div className={`task${props.task.completed? ' completed' : ''}`} onClick={()=>{
      props.dispatcher({type:"TOGGLE_COMPLETE", payload:props.task.id})
    }}>
        <p>{props.task.item} - {props.task.completedOn?<span>Completed on {Date(props.task.completedOn).toString().split('GMT')[0]}</span>:<span>Not completed yet</span>}</p>
    </div>
  )
}

export default Task;