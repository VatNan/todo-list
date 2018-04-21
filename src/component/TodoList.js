import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const {
      todos,
      toggleTodo,
      updateTodo,
      deleteTodo,
    } = this.props;
    
    return (
      <div>
        {
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              toggleTodo={(indexToggle) => {
                toggleTodo(indexToggle);
              }}
              updateTodo={(indexUpdate, newTask) => {
                updateTodo(indexUpdate, newTask);
              }}
              deleteTodo={(indexDelete) => {
                deleteTodo(indexDelete);
              }}
            />
          ))
        }
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  toggleTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
};

export default TodoList;
