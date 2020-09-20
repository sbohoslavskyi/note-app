import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = props.todo;

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({isDone: !this.state.isDone})
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-narrow">
                    <input type="checkbox" checked={this.state.isDone} onChange={this.onChange}/>
                </div>
                <div className="column">
                    <span>{this.state.title}</span>
                </div>
            </div>
        );
    }
}

export default Todo;
