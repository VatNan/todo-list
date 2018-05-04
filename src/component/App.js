import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import Footer from './Footer';
import Header from './Header';
import firebase from '../config/firebase';
import './styles/App.css'

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getData();
  }

  formatTodoFromFirebase = (result) => {
    return Object.keys(result).map((key) => ({
      id: key,
      data: result[key],
    }));
  }

  getData = () => {
    firebase.database().ref('/todos').on('value', (snapshot) => {
      // subscribe path '/todos'
      const result = snapshot.val();
      if (!result) { // not found result
        this.setState({
          todos: [],
        });
      } else { // found result
        this.setState({
          todos: this.formatTodoFromFirebase(result),
        });
      }
    });
  }

  createTodo = (task) => {
    firebase.database().ref('/todos').push().set({
      task,
      isComplete: false,
    });
  }

  toggleTodo = (idToggle, oldTodo) => {
    const update = {};
    // const oldTodo = this.state
    //   .todos
    //   .filter(todo => todo.id === idToggle)[0]
    //   .data;
    update[`/todos/${idToggle}`] = { ...oldTodo, isComplete: !oldTodo.isComplete }; 
    firebase.database().ref().update(update);
  }

  updateTodo = (idUpdate, newTask, oldTodo) => {
    const update = {};
    // const oldTodo = this.state
    //   .todos
    //   .filter(todo => todo.id === idUpdate)[0]
    //   .data;
    update[`/todos/${idUpdate}`] = { ...oldTodo, task: newTask }; 
    firebase.database().ref().update(update);
  }

  deleteTodo = (idDelete) => {
    firebase.database().ref(`/todos/${idDelete}`).remove();
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="app-root">
        <Header />
        <CreateTodo
          createTodo={this.createTodo}
        />
        <br />
        <TodoList
          todos={todos}
          toggleTodo={this.toggleTodo}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <br />
        <Footer />
      </div>
    )
  }
}

export default App;
