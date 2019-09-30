import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  state = {
    todos: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ]
  };

  handleDeleteTodos = () => {
    this.setState({ todos: [] });
  };

  handleAddTodo = e => {
    e.preventDefault();
  };

  callbackFunction = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          callbackFunction={this.callbackFunction}
          handleAddTodo={this.handleAddTodo}
          handleDeleteTodos={this.handleDeleteTodos}
        />
      </div>
    );
  }
}

export default App;
