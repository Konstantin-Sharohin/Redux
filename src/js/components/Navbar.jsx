import React from "react";

class Navbar extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        password: ""
      }
    }

render(){
    return (
            <div className="col-md-12">
                <nav className="navbar navbar-light bg-dark">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="User name" />
                        <input className="form-control mr-sm-2" type="password" placeholder="Password" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </form>
                    <p style={{color: "white"}}>The App is under construction...</p>
                </nav>
            </div>
    )
} 
};


export default Navbar;