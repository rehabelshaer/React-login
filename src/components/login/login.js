import React, { Component } from "react";
import "./style.css";
import login from "../images/login.jpg";
// import axios from "axios";

const initialState = {
  // username: "",
  email:"",
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
    if (this.state.email && this.state.password) {
      return {
        ...this.state,
        nameError: "",
        passwordError: "",
      };
      
    } else {
      if (!this.state.email) {
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


  login(){
    var axios = require('axios'); 
    var data ={
      email: 'abdelaziz@gmail.com',
      password : '123456'
    }
    var config = {
      method: 'post',
      url: 'http://medtroops-backend.appssquare.com/api/admin/login',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        ...data
      },
      data : data
    };
    
    const response = axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    if (!response.ok){

     return false

    }else{
      this.login()
    }   


  }
  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const isVaild = this.validate();
    const isTrue = this.login()

    if (isTrue) {
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
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.email}
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
                <button onClick={()=>{this.login()}} type="submit" value="submit">
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
  /* <Link to ="/">Login<Link>
<Link to ="/home">Home<link></Link>  */
// const token = localStorage.getItem("token");
//       localStorage.setItem("token" , JSON.stringify(
//         {
//           login:true,
//           token: response.data.token
//         }
//       ))

