import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      let newTodos = {};
      action.todos.forEach(todo => newTodos[todo.id] = todo);
      return newTodos;
    case RECEIVE_TODO:
      let newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return Object.assign({}, state, newTodo);
    case 'REMOVE_TODO':
      let newState = Object.assign({}, state)
      // console.log(`THUNKKKKKKKKKKKKKKKKKKK${action.type}`)
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
}

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export default todosReducer;