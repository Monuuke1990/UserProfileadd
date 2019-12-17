import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Mystyle from "../mystyle.css";





const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
// https://codesandbox.io/s/history-routing-lt7yv
class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      errors: {
        Name: "",
        Email: "",
        Password: ""
      }
    };
  }
 
routeChange () {
  alert("hello");
   const { history } = this.props;
   history.push("/addRemove");
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    let errors = this.state.errors;

    switch (name) {
      case "Name":
        errors.Name =
          value.length < 5 ? "Full Name must be 5 characters long" : "";
        break;
      case "Email":
        errors.Email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "Password":
        errors.Password =
          value.length < 8 ? "password must be 8 characters long" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("hi");
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
 


  render() {
    const { errors } = this.state;
    return (
      <Container maxWidth="sm" className="main_box">
        <Grid item lg={12}>
          <form onSubmit={this.handleSubmit} noValidate>
            <div>
              <TextField
                label="Name"
                margin="normal"
                name="Name"
                type="text"
                onChange={this.handleChange}
              />
              {errors.Name.length > 0 && (
                <span className="error">{errors.Name}</span>
              )}
            </div>
            <div>
              <TextField
                label="Email"
                margin="normal"
                name="Email"
                type="text"
                onChange={this.handleChange}
              />
              {errors.Email.length > 0 && (
                <span className="error">{errors.Email}</span>
              )}
            </div>
            <div>
              <TextField
                label="Password"
                margin="normal"
                type="Password"
                name="Password"
                onChange={this.handleChange}
              />
              {errors.Password.length > 0 && (
                <span className="error">{errors.Password}</span>
              )}
            </div>
            <div className="btn-top">
              <button    onClick={() => {
            this.routeChange();
          }}>
                <Button variant="contained" color="secondary">
                  Submit
                </Button>
              </button>
            </div>
          </form>
        </Grid>
      </Container>
    );
  }
}

export default register;