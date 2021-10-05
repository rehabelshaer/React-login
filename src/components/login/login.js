import React, { Component } from "react";
import "./style.css";
import login from "../images/login.jpg";
// import { Route, useHistory } from 'react-router';

const initialState = {
  username: "",
  password: "",
  nameError: "",
  passwordError: "",
};
class Login extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    if (this.state.username && this.state.password) {
      return {
        ...this.state,
        nameError: "",
        passwordError: "",
      };
    } else {
      if (!this.state.username) {
        this.setState((old) => ({
          ...old,
          nameError: "name can't be empty",
        }));
      }
      if (!this.state.password) {
        this.setState((old) => ({
          ...old,
          passwordError: "Enter Password",
        }));
      }
      return false;
    }
  };

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const isVaild = this.validate();
    if (isVaild) {
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div className="base-container">
        <div className="content">
          <div className="image">
            <img src={login} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </div>
              <div className="error">{this.state.nameError}</div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className="error">{this.state.passwordError}</div>

              <div className="button">
                <button type="submit" value="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
// <Link to="/home">Login</Link>
{
  /* <Link to ="/">Login<Link>
<Link to ="/home">Home<link></Link>  */
}
