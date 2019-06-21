import React from "react";
import { connect } from "react-redux";
import { updateData } from "../actions/index";
import { selectors } from "../selectors/index";
import "./edit.css";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";


class EditForm extends React.Component {

  
    state = {
      token: this.props.token,
      id: "",
      text: "",
      status: "10",
      sent: false
    }
  
  componentDidUpdate = (prevProps) => {
    if (this.props.token !== prevProps.token) {
    this.setState({ token: this.props.token });
  }
}

  updateInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }


  handleEditTask = event => {
    event.preventDefault();
    this.setState({ sent: true });
    this.props.updateData(this.state);
    this.setState({ id: "", text: "", status: "" });
  }


  render() {
    return (
      this.props.authorized ?
        <div className="edit-form col-md-12">
          <h2>Edit a task</h2>
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
                <input
                  id="statusDone"
                  type="radio"
                  className="custom-control-input"
                  name="status"
                  value="10"
                  checked={this.state.status === "" || this.state.status === "10"}
                  onChange={this.updateInput} />
                <label className="custom-control-label" htmlFor="statusDone">Done</label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="statusInprogress"
                  type="radio"
                  className="custom-control-input"
                  name="status"
                  value="0"
                  onChange={this.updateInput} />
                <label className="custom-control-label" htmlFor="statusInprogress">In progress</label>
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              SAVE
        </button>
          </form>
          {
            this.state.sent ?
              <Alert variant="success">
                Changes saved!
            </Alert>
              : null
          }
        </div>
        :
        null
    )
  }
}


const mapStateToProps = state => ({
  token: selectors.getToken(state),
  authorized: selectors.getAuthorization(state)
});

const mapDispatchToProps = dispatch => ({ updateData: task => dispatch(updateData(task)) });

EditForm.propTypes = {
  authorized: PropTypes.bool,
  token: PropTypes.string
};

const Edit = connect(mapStateToProps, mapDispatchToProps)(EditForm);

export default Edit;