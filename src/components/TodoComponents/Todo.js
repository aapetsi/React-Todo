import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    console.log(todo);
    return (
      <div>
        <p>{todo.task}</p>
      </div>
    );
  }
}

export default Todo;
