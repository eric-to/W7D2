import React from 'react';
import TodoListItem from '../todo_list_item/todo_list_item';
import TodoForm from '../todo_list_item/todo_form';
import { fetchTodos } from '../../util/todo_api_util';

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.todos.map((todo) => {
              return <TodoListItem todo={todo} key={todo.id} removeTodo={this.props.removeTodo} />
            })
          }
        </ul>
        <div>
          <TodoForm createTodo={this.props.createTodo} errors={this.props.errors}/>
        </div>
      </div>
    )}
}

