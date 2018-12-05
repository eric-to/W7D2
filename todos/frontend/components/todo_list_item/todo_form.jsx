import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};
    // this.updateInput = this.updateInput.bind(this);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
    this.props.createTodo.bind(this)
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
    const todo = Object.assign({}, this.state, { id: this.uniqueId(), done: false });
    console.log(this.props.createTodo);
    this.props.createTodo(todo).then(() => this.setState({title: "", body: ""}));
  }

  render() {

    // debugger
    return(
      <div>
        <form onSubmit={this.handleSubmitTodo} >
          <label>
            Title
            <input ref="title" onChange={this.updateInput('title')}  value={this.state.title} type="text"/>
          </label>
          <label>
            Body
            <input ref="body" onChange={this.updateInput('body')} value={this.state.body} type="text"/>
          </label>
      
          <input type="submit"/>
        </form>
        <h2 className='errors'>{this.props.errors}</h2>
      </div>

    );
  }


}

export default TodoForm