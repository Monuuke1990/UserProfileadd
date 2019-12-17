import React, { Component } from "react";
import services from "../services";
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from "@material-ui/icons/Home";
import AlarmIcon from "@material-ui/icons/Alarm";
import { green } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import DescriptionIcon from "@material-ui/icons/Description";
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
  Typography,
  Avatar
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default class profiledetail extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    let user = services.getUserById(this.props.match.params.id);
    this.setState({
      user: user
    });
  }
  render() {
    const { user } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense" className="Pro_nav">
            <Typography variant="h6">UX/UI Profession</Typography>
          </Toolbar>
        </AppBar>
        <Grid item md={6} xs={12} className="profile_container">
          <Link to={`/profile/`} className="btn-profile">
            Home
          </Link>
          <Card className="card_hover">
            <CardActionArea>
              <Avatar
                style={{ backgroundImage: `url(${user.src})` }}
                className="profile-avatar"
              />

              <CardContent>
                <div className="lbl-profile">
                  <AccountCircleIcon color="primary" />
                  <h6>FullName</h6>
                  <div>{user.fname}</div>
                </div>
                <div className="lbl-profile">
                  <EmailIcon color="primary" />
                  <h6>Email</h6>
                  <div>{user.email}</div>
                </div>
                <div className="lbl-profile">
                  <WbIncandescentIcon color="primary" />
                  <h6>Achievement</h6>
                  <div>{user.achivment}</div>
                </div>
                <div className="lbl-profile">
                  <SportsEsportsIcon color="primary" />
                  <h6>favourite Game</h6>
                  <div>{user.game}</div>
                </div>
                <div className="lbl-profile">
                  <DescriptionIcon color="primary" />
                  <h6>Description</h6>
                  <div>{user.Desc}</div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </div>
    );
  }
}
