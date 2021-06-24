// bring in react and our css
import React, { Component } from "react"; 
import "./Signup.css";

// declare state
export class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameError:"",
    lastNameError:"",
    usernameError:"",
    emailError:"",
    passwordError:"",
    confirmPasswordError:"",
  };
//   function to record input
  handleOnChange = (event) => {
    this.setState(
      {
        //   saying that the nam ewe gave the input will be the value
        [event.target.name]: event.target.value,
        firstNameError:"",
        lastNameError:"",
        usernameError:"",
        emailError:"",
        passwordError:"",
        confirmPasswordError:"",
      },
      () => {
        console.log("Inside setState Callback");
        console.log(this.state.firstName);
        // console.log(event.target.name, ":", event.target.value);
      }
    );
    console.log("the value of this.state.firstName: ", this.state.firstName);
    if (this.state.firstName.length === 0) {
      console.log("LOL cannot be empty");
    }
  };
//   handleOnChange = (event) => {
//     console.log(event.target.name, ":", event.target.value);
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };
// handle what happens when the submit button is clicked currently it is just console.logging
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
//   determine what happens when someone clicks a field and then unclicks the field or blurs out. Currently it will give an error if the field is blank
  handleOnBlur = (event)=>{
      console.log(event.target.name)
      console.log("Handle on blur triggered")
      if(this.state[event.target.name].length===0){
          this.setState({
              [`${event.target.name}Error`]:`${event.target.placeholder} cannot be empty`
          })
      }
      
  }
//   what is going to render on the dom
  render() {
    const { firstName, lastName, username, email, password, confirmPassword, firstNameError, lastNameError, usernameError, emailError, passwordError, confirmPasswordError } =
      this.state;
    return (
        // creating the form
      <div className="container">
        <div className="form-text">Sign up</div>
        <div className="form-div">
          <form className="form" onSubmit={this.handleOnSubmit}>
            <div className="form-group-inline">
              <div className="inline-container">
                <label htmlFor="firstName">First Name</label>
                {/* all of our input fields where we declare there names and call our functions */}
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                    {firstNameError && firstNameError}
                </div>
              </div>
              <div className="inline-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                    {lastNameError && lastNameError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleOnChange}
                  name="email"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                    {emailError && emailError}
                </div>

              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleOnChange}
                  name="username"
                  onBlur={this.handleOnBlur}
                  
                />
                <div className="errorMessage">
                    {usernameError && usernameError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleOnChange}
                  name="password"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                    {passwordError && passwordError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirn Password"
                  onChange={this.handleOnChange}
                  name="confirmPassword"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                    {confirmPasswordError && confirmPasswordError}
                </div>
              </div>
            </div>
            <div className="button-container">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
// exporting our page
export default Signup;