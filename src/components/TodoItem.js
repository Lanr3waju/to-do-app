import React from "react";
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

class ToDoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      this.setState({
        editing: false,
      });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        {" "}
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />{" "}
          <button onClick={() => this.props.deleteTodoProps(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          value={title}
          style={editMode}
          onKeyDown={this.handleUpdatedDone}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
        />
      </li>
    );
  }
}

export default ToDoItem;
