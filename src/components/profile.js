import React, { Component } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import Mystyle from "../mystyle.css";
import {
  CardMedia,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  TextField,
  Grid,
  MenuIcon,
  IconButton,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

import services from "../services";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default class Profile extends Component {
  state = {
    filter: "",
    data: [],
    show: false,
    FullName: "",
    Email: "",
    file: null,
  };
  componentDidMount() {
    let data = services.getUsers();
    this.setState({
      data: data
    });
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  showModal = () => {
    alert("safs");
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  inputhandle = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: [e.target.value] });
    console.log({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
     const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    // this.setState({
    //   FullName: ""
    // });
  };
filechange=(e)=>{
  console.log("image taken");
  this.setState({file:e.target.files[0]});
}
  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense" className="Pro_nav">
            <Typography variant="h6">UX/UI Profession</Typography>
          </Toolbar>
        </AppBar>

        <div className="Wrapper_main">
          <button type="button" onClick={this.showModal}>
            open
          </button>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                id="input-with-icon-grid"
                label="Search"
                value={filter}
                onChange={this.handleChange}
                className="search-box"
              />
            </Grid>

            {filteredData.map(item => (
              <Grid item md={3} xs={12}>
                <Card key={item.id} className="card_hover">
                  <CardActionArea>
                    <CardMedia
                      style={{ backgroundImage: `url(${item.src}) ` }}
                      className="Avatar"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.fname}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.Designation}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/*<Button className="btn-profile">Learn More</Button>*/}
                    <Link
                      to={`/profileDetails/` + item.id}
                      className="btn-profile"
                    >
                      Learn More
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        <main>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="FullName"
                name="FullName"
                type="text"
                value={this.state.FullName}
                id={this.state.FullName}
                onChange={this.inputhandle}
              />

               <br/>  <br/>  <br/>   
              <input type="file" name="myImage" onChange= {this.filechange} /><br/>  <br/>  
              <input type="submit" value="Submit" /><br/>  <br/>  
            </form>
          </Modal>
        </main>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
