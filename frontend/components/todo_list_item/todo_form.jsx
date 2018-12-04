import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};
    // this.updateInput = this.updateInput.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
  }

 

  updateInput(field) {
    // return (e) => {
    //   console.log(this.state);
    //   let newState = {};
    //   newState[field] = e.target.value;
    //   this.setState(newState);
    // }
    return e => this.setState({[field]: e.target.value});
  }

  // put in util file
  uniqueId() {
    return new Date().getTime();
  }

  handleSubmitTodo(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: this.uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmitTodo} >
        <label>
          Title
          <input ref="title" onChange={this.updateInput('title')}  value={this.state.title} type="text"/>
        </label>
        <label>
          Body
          <input ref="body" onChange={this.updateInput('body')} value={this.state.body} type="text"/>
        </label>
        <input onClick={this.handleSubmitTodo}  type="submit"/>
      </form>
    );
  }


}

export default TodoForm