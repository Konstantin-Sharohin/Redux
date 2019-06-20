import React from "react";
import { connect } from "react-redux";
import { getData, selectPage, sortByEmail, sortByUsername } from "../actions/index";
import { selectors } from "../selectors/index";
import PageNumbers from "./PageNumbers";
import SortByEmail from "./SortByEmail";
import SortByUsername from "./SortByUsername";
import PropTypes from "prop-types";
import Spinner from 'react-bootstrap/Spinner'


class ConnectedPosts extends React.Component {
constructor() {
  super();
  this.state = {
    isLoading: true
  };
}

  componentDidMount = () => {
    this.props.getData().then(() => this.setState({ isLoading: false }));
  }

  render() {
    const done = {color:"#3a9c3a"},
          inprogress = {color:"#4949aa"};
    return (
      this.state.isLoading ? 
      <Spinner animation="border" variant="secondary" />
        
      : 
        <ul className="list-group list-group-flush col-md-12">
          {this.props.remoteTasks.map((el, index) => {
            const statusStyle = el.status === 0 ? inprogress : done,
            statusText = el.status === 0 ? "In progress" : "Done";

            return (<li className="list-group-item" key={index} style={{"wordBreak": "break-all"}}>
              <p><strong>id:</strong> {el.id}</p>
              <p><strong>username:</strong> {el.username}</p>
              <p><strong>email:</strong> {el.email}</p>
              <p><strong>task:</strong> {el.text}</p>
              <p><strong>status:</strong> <strong><span style={statusStyle}>{statusText}</span></strong></p>
            </li>)
          })}
            <SortByUsername sortUsername={this.props.sortByUsername}/>
            <SortByEmail sortEmail={this.props.sortByEmail}/>
            <PageNumbers/>
        </ul>
    )
  }

};

const mapStateToProps = state => ({
  remoteTasks: selectors.getRemoteTasks(state),
  currentPage: selectors.getCurrentPage(state),
  tasksQuantity: selectors.getTasksQuantity(state),
  errors: selectors.getErrors(state),
  pages: selectors.getPages(state)
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  selectPage: page => dispatch(selectPage(page)),
  sortByEmail: () => dispatch(sortByEmail()),
  sortByUsername: () => dispatch(sortByUsername())
});


ConnectedPosts.propTypes = {
  remoteTasks: PropTypes.array,
  currentPage: PropTypes.number,
  tasksQuantity: PropTypes.number,
  pages: PropTypes.array,
  errors: PropTypes.array,
  getData: PropTypes.func,
  selectPage: PropTypes.func
};

const Tasks = connect(mapStateToProps, mapDispatchToProps)(ConnectedPosts);

export default Tasks;