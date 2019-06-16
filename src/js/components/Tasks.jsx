import React from "react";
import { connect } from "react-redux";
import { getData, selectPage, sortByEmail } from "../actions/index";
import { selectors } from "../selectors/index";
import PageNumbers from "./PageNumbers";
import SortByEmail from "./SortByEmail";
import PropTypes from "prop-types";


class ConnectedPosts extends React.Component {

  componentDidMount = () => {
    this.props.getData();
  }

  selectPage = event => this.props.selectPage(parseInt(event.target.id, 10));
  filterEmail = () => this.props.filterEmail();


  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.remoteTasks.map((el, index) => (
          <li className="list-group-item" key={index}>
            <p><strong>id:</strong> {el.id}</p>
            <p><strong>username:</strong> {el.username}</p>
            <p><strong>email:</strong> {el.email}</p>
            <p><strong>task:</strong> {el.text}</p>
          </li>
        ))}
          <SortByEmail filterEmail={this.filterEmail}/>
          <PageNumbers selectPage={this.selectPage} pages={this.props.pages}/>
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
  sortByEmail: () => dispatch(sortByEmail())
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