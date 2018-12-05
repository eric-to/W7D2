import { connect } from 'react-redux';
import TodoList from "./todo_list";
import allTodos from '../../reducers/selectors';
import { receiveTodo, createTodo, fetchTodos } from '../../actions/todo_actions';

const mapStateToProps = state => {
  return ({
  todos: allTodos(state),
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);