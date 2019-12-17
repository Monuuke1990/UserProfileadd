import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

export default class addremove extends Component {
  state = {
    rows: [{}]
  };

  handleChange = id=>e => {
      const [name , value]= e.target;
      const rows = [...this.state.rows];
      rows[id]={
          [name]:value
      };
      this.setState({
            rows
      });
    console.log("hi");
  };

  handleAddRow=()=>{
      const item ={
        Name:"",
        Mobilename:"",
      };
      this.setState({
           rows: [...this.state.rows, item]
      })
  }
 handleRemoveSpecificRow = (id) => () => {
    const rows = [...this.state.rows]
    rows.splice(id, 1)
    this.setState({ rows })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                   
                  <tr>
                    <th className="text-center"> # </th>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> Mobile </th>
                         <th className="text-center"> Action </th>
                  </tr>
                </thead>
                <tbody>
                     {this.state.rows.map((item, id)=>(
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Name"
                        value={this.state.rows[id].name}
                        onChange={this.handleChange(id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Mobilename"
                        value={this.state.rows[id].Mobilename}
                        onChange={this.handleChange(id)}
                      />
                      <span>https://codesandbox.io/s/sad-davinci-czmq3</span>
                    </td>

                     <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(id)}
                        >
                          Remove
                        </button>
                      </td>
                  </tr>
                  ))}
                </tbody>
              </table>
               <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
