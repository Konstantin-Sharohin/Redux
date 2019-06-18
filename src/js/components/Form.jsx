import React from "react";
import { connect } from "react-redux";
import { putData } from "../actions/index";
import Edit from "./Edit";


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
      <div>
      <form className="form-signin" onSubmit={this.handleAddTask}>
        <div className="form-label-group">
          <input
            type="text"
            className="form-control"
            name="name"
            id="form_input_name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.updateInput}
          />
          <label htmlFor="form_input_name">Name</label>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            className="form-control"
            name="email"
            id="form_input_email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.updateInput}
          />
          <label htmlFor="form_input_email">Email</label>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            className="form-control"
            name="text"
            id="form_input_text"
            value={this.state.text}
            placeholder="Task"
            onChange={this.updateInput}
          />
          <label htmlFor="form_input_text">Task</label>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
      <div className="edit-form col-md-12">
        <h2>Edit a task</h2>
        <Edit />
      </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({putData: task => dispatch(putData(task))});

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;