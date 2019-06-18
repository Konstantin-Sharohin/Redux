import React from "react";
import { connect } from "react-redux";
import { getData, selectPage, sortByEmail, sortByUsername } from "../actions/index";
import { selectors } from "../selectors/index";
import PageNumbers from "./PageNumbers";
import SortByEmail from "./SortByEmail";
import SortByUsername from "./SortByUsername";
import PropTypes from "prop-types";


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

  selectPage = event => this.props.selectPage(parseInt(event.target.id, 10));
  sortEmail = () => this.props.sortEmail();
  sortUsername = () => this.props.sortUsername();


  render() {
    const done = {color:"#3a9c3a"},
            inprogress = {color:"#4949aa"};
    return (
      this.state.isLoading ? 
        <div className="spinner-border text-info" style={{"margin": "50% 60%"}}></div>
        
      : 
        <ul className="list-group list-group-flush">
          {this.props.remoteTasks.map((el, index) => {
            const statusStyle = el.status === 0 ? inprogress : done,
            statusText = el.status === 0 ? "In progress" : "Done";

            return (<li className="list-group-item" key={index}>
              <p><strong>id:</strong> {el.id}</p>
              <p><strong>username:</strong> {el.username}</p>
              <p><strong>email:</strong> {el.email}</p>
              <p><strong>task:</strong> {el.text}</p>
              <p><strong>status:</strong> <strong><span style={statusStyle}>{statusText}</span></strong></p>
            </li>)
          })}
            <SortByUsername sortUsername={this.sortUsername}/>
            <SortByEmail sortEmail={this.sortEmail}/>
            <PageNumbers selectPage={this.selectPage} pages={this.props.pages} currentPage={this.props.currentPage} tasksQuantity={this.props.tasksQuantity}/>
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