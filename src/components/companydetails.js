import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button,Alert } from 'react-bootstrap';

export default class form extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {

        return (<div>
            <Container>
                <Row>


                    <Col xs={12} md={6}>
                        <ul>
                            {this.state.persons.map(person => <Alert className="alert-success">
    
 {person.name},{person.username
                                } </Alert>)}
                        </ul>

                      
                    </Col>
                </Row></Container>

        </div>)
    }

}