import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

class App extends React.Component {
  state = {
    todos: [
      // { task: 'eiei', isComplete: true }
    ],
  };

  createTodo(task) {
    const { todos } = this.state;
    const newTodos = [
      ...todos,
      { task, isComplete: false },
    ];

    this.setState({
      todos: newTodos,
    });
  }

  toggleTodo(indexToggle) {
    const { todos } = this.state;
    const newTodos = todos.map((todo, index) => {
      // match
      if (indexToggle === index) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }

      // not match
      return  todo;
    });

    this.setState({
      todos: newTodos,
    });
  }

  updateTodo(indexUpdate, newTask) {
    const { todos } = this.state;
    const newTodos = todos.map((todo, index) => {
      // match
      if (indexUpdate === index) {
        return {
          ...todo,
          task: newTask,
        };
      }

      // not match
      return  todo;
    });

    this.setState({
      todos: newTodos,
    });
  }

  deleteTodo(indexDelete) {
    const { todos } = this.state;
    alert(55555)
    const newTodos = todos.filter((todo, index) => {
      return index !== indexDelete;
    });

    this.setState({
      todos: newTodos,
    });
  }

  render() {
    const { todos } = this.state;
  
    return (
      <div>
        <h1>Todo List</h1>
        <CreateTodo
          createTodo={(task) => { this.createTodo(task); }}
        />
        <br />
        <TodoList
          todos={todos}
          toggleTodo={(indexToggle) => {
            this.toggleTodo(indexToggle);
          }}
          updateTodo={(indexUpdate, newTask) => {
            this.updateTodo(indexUpdate, newTask)
          }}
          deleteTodo={(indexDelete) => {
            this.deleteTodo(indexDelete);
          }}
        />
      </div>
    )
  }
}

export default App;
