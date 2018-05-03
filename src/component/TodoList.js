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
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo.data}
              id={todo.id}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
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
