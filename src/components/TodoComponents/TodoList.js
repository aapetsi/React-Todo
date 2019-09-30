// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    if (!todos) {
      return <p>Enter a new todo</p>;
    } else {
      return (
        <div>
          <p>TodoList component</p>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      );
    }
  }
}

export default TodoList;
