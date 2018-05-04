import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './styles/CreateTodo.css';

class CreateTodo extends Component {
  state = {
    task: '',
  };
  inputCreateTask = React.createRef();

  validateTask = () => this.state.task.trim();

  setTast = (task) => {
    this.setState({ task });
  }

  clearTask = () => {
    this.setState({ task: '' });
  }

  render() {
    const { task } = this.state;
    const { createTodo } = this.props;
    return (
      <div className="create-todo-root">
        <input
          ref={this.inputCreateTask}
          value={task}
          onChange={(e) => {
            this.setTast(e.target.value);
          }}
          placeholder="create todo"
        />
        <button
          onClick={() => {
            if(this.validateTask()) {
              createTodo(task.trim());
              // clear text input 
              this.clearTask();
            } else {
              toast.error("Task is required!");
              this.inputCreateTask.current.focus();
            }
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
