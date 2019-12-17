import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default class PersonList extends Component {
    state = {
        name: '',
       
    }
    handleChange=(e)=>{
        this.setState({name:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault();

        const user = {
          name: this.state.name,
         
        }
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    render() {
        return (<div>
            <Container><Row><Col xs={12} md={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <label>username</label>
                        <input className="form-control"
                            type="text"  name="name" onChange={this.handleChange}
                            placeholder="Name"

                        />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </Col></Row></Container>
        </div>)
    }
} 