import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MODE = {
  EDIT: 'edit',
  SHOW: 'show',
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: MODE.SHOW,
      task: this.props.todo.task,
    };
  }

  editMode(mode) {
    this.setState({
      mode
    });
  }

  render() {
    const { mode, task } = this.state;
    const {
      todo,
      toggleTodo,
      index,
      updateTodo,
      deleteTodo,
    } = this.props;

    return (
      <div>
        {
          (mode === MODE.SHOW)
            ? (
              <div>
                <label
                  onClick={() => {
                    toggleTodo(index);
                  }}
                  style={{ color: (todo.isComplete) ? 'black': 'green'  }}
                >
                  {todo.task}
                </label>
                &nbsp;&nbsp;&nbsp;
                <button
                  onClick={() => {
                    this.editMode(MODE.EDIT);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  Delete
                </button>
              </div>
            )
            : (
              <div>
                <input
                  value={task}
                  onChange={(e) => { this.setState({ task: e.target.value }); }} /> 
                <button
                  onClick={() => {
                    updateTodo(index, task);
                    this.editMode(MODE.SHOW);
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    this.editMode(MODE.SHOW);
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
  index: PropTypes.number.isRequired,
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
