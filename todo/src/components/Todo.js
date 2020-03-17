import React from 'react';

const Task = props => {
  return (
    <div className={`task${props.task.completed? ' completed' : ''}`} onClick={()=>{
      props.dispatcher({type:"TOGGLE_COMPLETE", payload:props.task.id})
    }}>
        <p>{props.task.item}</p>
    </div>
  )
}

export default Task;