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
  constructor(){
    super();
    this.state = {
      filter: "",
      data: [],
      show: false,
      newUser: {
        fname: "",
    Designation: "",
    email: "",
    game: "",
    achivment: "",
    Desc:
      "",  
        src: "data:image/jpeg;base64,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",
      }
    };
  }
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
  }
  inputhandle = e => {
    e.preventDefault();

    this.setState({ newUser: {...this.state.newUser, [e.target.name]: e.target.value }});
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


     this.setState({
       data: [...this.state.data, this.state.newUser]
     });
  };
filechange=(e)=>{
  console.log("image taken");
  this.setState({file:e.target.files[0]});
  // https://medium.com/@mahesh_joshi/reactjs-nodejs-upload-image-how-to-upload-image-using-reactjs-and-nodejs-multer-918dc66d304c
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
                name="fname"
                type="text"
                value={this.state.newUser.fname}
                id={this.state.newUser.fname}
                onChange={this.inputhandle}
              />

<TextField
                label="Designation"
                name="Designation"
                type="text"
                value={this.state.newUser.Designation}
                id={this.state.newUser.Designation}
                onChange={this.inputhandle}
              />
              <TextField
                label="email"
                name="email"
                type="text"
                value={this.state.newUser.email}
                id={this.state.newUser.email}
                onChange={this.inputhandle}
              />
               <TextField
                label="game"
                name="game"
                type="text"
                value={this.state.newUser.game}
                id={this.state.newUser.game}
                onChange={this.inputhandle}
              />
                 <TextField
                label="achivment"
                name="achivment"
                type="text"
                value={this.state.newUser.achivment}
                id={this.state.newUser.achivment}
                onChange={this.inputhandle}
              />
               <TextField
                label="Desc"
                name="Desc"
                type="text"
                value={this.state.newUser.Desc}
                id={this.state.newUser.Desc}
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
