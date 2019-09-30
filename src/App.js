import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    let todos = JSON.parse(localStorage.getItem("todoList"));
    console.log(todos);
    this.setState({ todos: todos });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    localStorage.setItem("todoList", JSON.stringify(prevState.todos));
    console.log("did update");
  }

  handleCompleteStatus = () => {
    this.setState({});
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
