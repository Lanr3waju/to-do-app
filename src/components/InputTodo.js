import React, { Component } from "react";
import { FaPlusCircle } from "react-icons/fa";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          className="input-text"
          type="text"
          name="title"
          placeholder="Add Todo....."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">
          <FaPlusCircle
            style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
            className="submit-icon"
          />
        </button>
      </form>
    );
  }
}
export default InputTodo;
