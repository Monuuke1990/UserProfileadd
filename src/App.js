import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/companydetails";
import PersonList from "./components/personlist";
import Main from "./components/personlist";
import Register from "./components/register";
import Profile from "./components/profile";
import Adduser from "./components/Adduser";
import Profiledetails from "./components/profileDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class App extends React.Component {
  doSomething = companyinfo => {
    console.log(companyinfo);
  };

  render() {
    return (
      <div>
        {/*<Main />*/}
        {/*<Register/>*/}
        {/*<Profile/>*/}
        {/*<Profiledetails/>*/}

        <Router>
          <Switch>
            <Route path="/profiledetails/:id" component={Profiledetails} />
            <Route path="/" component={Profile} />
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
