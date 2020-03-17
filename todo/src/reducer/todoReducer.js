export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'cry about reducers',
    completed: false,
    id: 1241225
  }
]

export const todoReducer = (state,action) => {
  switch(action.type){
    case 'ADD_TASK':
      state=[
        ...state,
        {item:action.payload,
        completed:false,
        id:Date.now()}]
      return (state)
      
    case 'TOGGLE_COMPLETE':
      return (state.map(task => {
        if(task.id===action.payload){
          task.completed=!task.completed
          return task
        }else{
          return task
        }
      }))

    case 'CLEAR_COMPLETED':
      //map trough data to find the shit passed
      return state.filter(task=>
        task.completed === false 
      )

    default:
      return initialState;
  }
}


