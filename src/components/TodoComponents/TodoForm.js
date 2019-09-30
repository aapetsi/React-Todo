import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    task: "",
    completed: false,
    id: ""
  };

  addNewTodo = e => {
    e.preventDefault();
    let todo = this.state;
    todo.id = Date.now();
    this.props.callbackFunction(todo);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handleDeleteTodos } = this.props;
    return (
      <div>
        <form onSubmit={this.addNewTodo}>
          <input name="task" onChange={this.handleChange} type="text" />
          <button type="submit">Add Todo</button>
          <button onClick={handleDeleteTodos} type="button">
            Clear Todos
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
