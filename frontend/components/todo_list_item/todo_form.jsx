import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
  }

  render() {
    return(
      <form action="">
        <label>
          Title
          <input onInput={this.updateInput('title')} type="text"/>
        </label>
        <label>
          Body
          <input onInput={this.updateInput('body')} type="text"/>
        </label>
        <input onClick={this.handleSubmitTodo} type="submit"/>
      </form>
    );
  }

  updateInput(field) {
    return (e) => {
      console.log(this.state);
      let newState = {};
      newState[field] = e.target.value;
      this.setState(newState);
    }
  }

  uniqueId() {
    return new Date().getTime();
  }

  handleSubmitTodo() {
    
  }


}

export default TodoForm