export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
};

export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: todo
  })
};

export const removeTodo = (todo) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`
  })
}