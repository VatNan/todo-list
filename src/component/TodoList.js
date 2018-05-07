import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import withLoader from '../hoc/withLoader';
import './styles/TodoList.css';

const TodoList = ({
  todos,
  toggleTodo,
  updateTodo,
  deleteTodo,
}) => 
(
  <div className="todo-list-root">
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


TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  loading: PropTypes.bool,
};

TodoList.defaultProps = {
  todos: [],
  toggleTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  loading: false,
};

const TodoListWithLoader = withLoader('loading')(TodoList);

export default TodoListWithLoader;
