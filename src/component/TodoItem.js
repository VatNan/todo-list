import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './styles/TodoItem.css';

const MODE = {
  EDIT: 'edit',
  SHOW: 'show',
};

const COLOR = {
  GRAY: '#d9d9d9',
  GREEN: '#4CAF50',
}

class TodoItem extends Component {
  state = {
    mode: MODE.SHOW,
    task: this.props.todo.task,
  };
  inputEditTask = React.createRef();

  editMode = async (mode) => {
    await this.setState({
      mode,
    });
    if (mode === MODE.EDIT) {
      this.inputEditTask.current.focus();
    }
  }

  validateTask = () => this.state.task.trim();

  setTast = (task) => {
    this.setState({ task });
  }

  render() {
    const { mode, task } = this.state;
    const {
      todo,
      toggleTodo,
      id,
      updateTodo,
      deleteTodo,
    } = this.props;

    return (
      <div>
        {
          (mode === MODE.SHOW)
            ? (
              <div className="todo-item-todo">
                <label
                  className="todo-item-task"
                  onClick={() => {
                    toggleTodo(id, todo);
                  }}
                  style={{
                    color: (todo.isComplete) ? COLOR.GRAY : COLOR.GREEN,
                    textDecoration: (todo.isComplete) ? 'line-through': 'none',
                    flex: 1,
                  }}
                >
                  {todo.task}
                </label>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="todo-item-button-edit"
                  onClick={() => {
                    this.editMode(MODE.EDIT);
                  }}
                >
                  Edit
                </button>
                <button
                  className="todo-item-button-delete"
                  onClick={() => {
                    deleteTodo(id);
                  }}
                >
                  Delete
                </button>
              </div>
            )
            : (
              <div className="todo-item-todo">
                <input
                  ref={this.inputEditTask}
                  className="todo-item-task todo-item-task-input"
                  value={task}
                  onChange={(e) => { this.setTast(e.target.value); }}
                  placeholder=" Key the task..."
                /> 
                <button
                  className="todo-item-button-save"
                  onClick={() => {
                    if(this.validateTask()) {
                      updateTodo(id, task.trim(), todo);
                      this.editMode(MODE.SHOW);
                    } else {
                      toast.error("Task is required!");
                      this.inputEditTask.current.focus();
                    }
                  }}
                >
                  Save
                </button>
                <button
                  className="todo-item-button-cancel"
                  onClick={() => {
                    this.editMode(MODE.SHOW);
                    this.setState({ task: this.props.todo.task });
                  }}
                >
                  Cancel
                </button>
              </div>
            )
        }
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  toggleTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
};

export default TodoItem;
