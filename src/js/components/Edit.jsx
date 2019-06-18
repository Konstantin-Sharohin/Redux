import React from "react";
import { connect } from "react-redux";
import { putData } from "../actions/index";
import { selectors } from "../selectors/index";
import "./edit.css";
import PropTypes from "prop-types";


class EditForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: "",
      status: ""
    }
  }

  updateInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }


  handleEditTask = event => {
    event.preventDefault();
    this.props.putData(this.state);
    this.setState({ id: "", text: "", status: "" });
  }


  render() {
    return (
      <form className="form-signin" onSubmit={this.handleEditTask}>
        <div className="form-label-group">
          <input
            type="text"
            className="form-control"
            name="id"
            value={this.state.id}
            placeholder="Type user's Id"
            onChange={this.updateInput}
          />
          <label htmlFor="id">Type user's Id</label>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            className="form-control"
            name="text"
            value={this.state.text}
            placeholder="Type user's task"
            onChange={this.updateInput}
          />
          <label htmlFor="text">Type user's task</label>
        </div>
          <h4 className="mt-3">Select task status</h4>
          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input id="credit" name="status" type="radio" className="custom-control-input" defaultChecked required=""/>
              <label className="custom-control-label" htmlFor="credit">Done</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="debit" name="status" type="radio" className="custom-control-input" required=""/>
              <label className="custom-control-label" htmlFor="debit">In progress</label>
            </div>
          </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
};


const mapStateToProps = state => ({
  remoteTasks: selectors.getRemoteTasks(state)
});

const mapDispatchToProps = dispatch => ({putData: task => dispatch(putData(task))});


EditForm.propTypes = {
  remoteTasks: PropTypes.array
};

const Edit = connect(mapStateToProps, mapDispatchToProps)(EditForm);

export default Edit;