export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

import * as APIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions'

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const fetchTodos = () => (dispatch, getState) => {
  return APIUtil.fetchTodos().then((res) => dispatch(receiveTodos(res))); 
};

export const createTodo = (todo) => (dispatch, getState) => {
  return APIUtil.createTodo(todo)
  .then( 
    todo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
}

// Phase 5 ):
export const removeTodo = (todo) => ({
  type: 'REMOVE_TODO',
  todo: todo
});

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.fetchTodos = fetchTodos;