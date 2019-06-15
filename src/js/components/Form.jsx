import React from "react";
import { connect } from "react-redux";
import { putData } from "../actions/index";


class ConnectedForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      text: "",
      status: ""
    }
  }

  updateInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }


  handleAddTask = event => {
    event.preventDefault();
    this.props.putData(this.state);
    this.setState({ name: "", email: "", text: "" });
  }


  render() {
    return (
      <form onSubmit={this.handleAddTask}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.updateInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={this.state.email}
            onChange={this.updateInput}
          />
          <label htmlFor="text">Task</label>
          <input
            type="text"
            className="form-control"
            name="text"
            value={this.state.text}
            onChange={this.updateInput}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({putData: task => dispatch(putData(task))});

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;