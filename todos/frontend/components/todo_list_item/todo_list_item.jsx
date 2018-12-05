import React from 'react';

class TodoListItem extends React.Component {
  handleDeleteTodo(e) {
    return () => {
      this.props.removeTodo(this.props.todo);
    };
  }

  render() {
    return(
      <div>
        <li>
          {this.props.todo.title}
        </li>
        <button onClick={this.handleDeleteTodo(this.props.todo)}>BAD TODO</button>
      </div>
    )}
}

// const TodoListItem = (props) => {
//   return(
//     <div>
//       <li>
//         {props.todo.title}
//       </li>
//       <button onClick="">BAD TODO</button>
//     </div>
//   )}

export default TodoListItem;