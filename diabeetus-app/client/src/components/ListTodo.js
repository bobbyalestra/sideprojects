import React from 'react';


const ListTodo = ({ todos, deleteTodo }) => {

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => {
                return (
                  <li key={todo._id} onClick={() => deleteTodo(todo._id)}>{parseInt(todo.action)}</li>
             
                )
              })
            )
            :
            (
              <li>Enter Food Items</li>
            )
      }
      
    </ul>
  )
  
}

export default ListTodo