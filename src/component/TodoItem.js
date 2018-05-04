import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  constructor(props) {
    super(props);
    this.state = {
      mode: MODE.SHOW,
      task: this.props.todo.task,
    };
  }

  editMode = (mode) => {
    this.setState({
      mode,
    });
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
                  className="todo-item-task todo-item-task-input"
                  value={task}
                  onChange={(e) => { this.setState({ task: e.target.value }); }} /> 
                <button
                  className="todo-item-button-save"
                  onClick={() => {
                    updateTodo(id, task, todo);
                    this.editMode(MODE.SHOW);
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
