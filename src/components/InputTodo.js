import React, { component } from "react";

class InputTodo extends component {
    render() {
        return (
            <form>
                <input type= 'text' placeholder="Add Todo....." />
                <button>Submit</button>
            </form>
        )
    }
}
export default InputTodo;