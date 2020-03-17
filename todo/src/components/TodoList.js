import React from 'react';
import Todo from "./Todo";


class TodoList extends React.Component {

  render() {
    return (
      <div className="todolist">   
      {
          this.props.tasks.map(e=>{
              return <Todo key={e.id} task={e} dispatcher={this.props.dispatcher}></Todo>
          })
      }
      </div>
    );
  }
}

export default TodoList;
