import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/CreateTodo.css';

class CreateTodo extends Component {
  state = {
    task: '',
  };

  render() {
    const { task } = this.state;
    const { createTodo } = this.props;
    return (
      <div className="create-todo-root">
        <input
          value={task}
          onChange={(e) => {
            this.setState({ task: e.target.value });
          }}
        />
        <button
          className="create-todo-button"
          onClick={() => {
            createTodo(task);
            // clear text input 
            this.setState({ task: '' });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

CreateTodo.propTypes = {
  createTodo: PropTypes.func,
};

CreateTodo.defaultProps = {
  createTodo: () => {},
};

export default CreateTodo;
