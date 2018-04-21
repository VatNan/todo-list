import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTodo extends Component {
  state = {
    task: ''
  };

  render() {
    const { task } = this.state;
    const { createTodo } = this.props;
    return (
      <div>
        <input
          value={task}
          onChange={(e) => {
            this.setState({ task: e.target.value });
          }}
        />
        <button
          onClick={() => {
            createTodo(task);
            // clear text input 
            this.setState({ task: '' });
          }}
        >
          Create
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
