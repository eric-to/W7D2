import React from 'react';
import TodoListItem from '../todo_list_item/todo_list_item';
import TodoForm from '../todo_list_item/todo_form';
// import { receiveTodo } from '../../actions/todo_actions';

export default (props) => {
  console.log(props);
  return(
    <div>
      <ul>
        {
          props.todos.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} />
          })
        }
      </ul>
      <div>
        <TodoForm receiveTodo={props.receiveTodo}/>
      </div>
    </div>
)}

