import React from "react";
import ToDoItem from "./TodoItem";
class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <ToDoItem
            setUpdate={this.props.setUpdate}
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.delTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default ToDoList;
