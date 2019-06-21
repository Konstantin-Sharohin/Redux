import React from "react";
import { connect } from "react-redux";
import { authorization } from "../actions/index";
import { selectors } from "../selectors/index";
import PropTypes from "prop-types";


class ConnectedNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    updateInput = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }


    handleLogin = event => {
        event.preventDefault();
        this.props.authorization(this.state);
        this.setState({ name: "", password: "" });
    }

    render() {
        return (
            this.props.authorized ?
            <div className="col-md-12">
                <nav className="navbar navbar-light bg-dark">
                    <h3 style={{color: "pink"}}>Logged in as admin</h3>
                </nav>
            </div>
            :
            <div className="col-md-12">
                <nav className="navbar navbar-light bg-dark">
                    <form className="form-inline" onSubmit={this.handleLogin}>
                        <input className="form-control mr-sm-2" type="text" placeholder="User name" name="name" value={this.state.name} onChange={this.updateInput} />
                        <input className="form-control mr-sm-2" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.updateInput} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </form>
                </nav>
            </div>
        )
    }
};


const mapStateToProps = state => ({
    authorized: selectors.getAuthorization(state)
});

const mapDispatchToProps = dispatch => ({ authorization: values => dispatch(authorization(values)) });


ConnectedNavbar.propTypes = {
    authorized: PropTypes.bool
};

const Navbar = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavbar);

export default Navbar;