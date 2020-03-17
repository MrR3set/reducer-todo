import React, {useReducer} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {todoReducer,initialState} from "./reducer/todoReducer";
import "./App.css";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  

  const clicked = () =>{
    console.log("clicked");
    dispatch({type:"CLEAR_COMPLETED"})
  }
  console.log("state",state);
  console.log("initialState",initialState);
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="form-wrapper">
          <TodoForm dispatcher={dispatch}/>
        </div>
        <div className="todoList-wrapper">
          <TodoList tasks={state} dispatcher={dispatch}/>
          <button onClick={clicked}>Clear Completed</button>
        </div>
     </div>
    </div>
  );
}

export default App;

