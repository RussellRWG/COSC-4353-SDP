import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.min.css";
import {Form, Container, Col, Row, Button} from "react-bootstrap";

import axios from "axios";
import {connect} from 'react-redux';
import * as actions from '../store/actions/Auth';

class FuelForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gallons: 0,
            price: 1.99,
            selectedDate: new Date(),
            address: "1725 Slough Avenue, Scranton, Pennsylvania"
        }
    }

    componentDidMount = async () => {
        await mapStateToProps(this.state);

        if (!this.props.token){
            this.props.history.push('/login');
        }

        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${this.props.token}`
        };
    }

    onLogout = (event) => {
        this.props.logout();
        this.props.history.push('/login');
    }


    onChangeGallonsHandler = (e) =>{
        this.setState({gallons: e.target.value})
    };

    changeDate = (date) => {
        this.setState({selectedDate: date})
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {gallons, price, selectedDate, address} = this.state;
        const formatDate = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate();
        console.log("HERE!", this.state);
        if(gallons !== 0 && gallons!==""){
            const total = gallons * price;
            axios.post("http://localhost:8000/api/fuelform/",{"gallons":parseInt(gallons), "delivery_address":address, "suggested_price":price, "total_due":total, "delivery_date":formatDate})
                .then((response) => {
                    console.log(response.status)
                })
        }


    };

    render() {
        return (
            <div className="fuelform">
            <div id = "navigation">
                    <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>Website Name</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/profile">Client Profile</Nav.Link>
                        <Nav.Link href="/fuelhistory">Fuel Quote History</Nav.Link>
                    </Nav>
                    <Nav.Link onClick = {this.onLogout}>
                        Logout
                    </Nav.Link>
                    </Navbar>

            </div>
            <div className = "outerfocus">
            <div className = "focus">
            <Container>
                <h1>Fuel Form</h1>
                <Form>
                    <Row>
                        <Col xs>
                            <Form.Group>
                                <Form.Label>Gallons Requested</Form.Label>
                                <Form.Control required type={"number"} min={0} onChange={this.onChangeGallonsHandler} value={this.state.gallons} />
                            </Form.Group>
                        </Col>

                        <Col xs>
                            <Form.Group>
                                <Form.Label>Delivery Date</Form.Label>
                                <Row>
                                    <DatePicker selected={this.state.selectedDate} onChange={this.changeDate} className={"form-control"}/>
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs>
                            <Form.Group>
                                <Form.Label>Delivery Address</Form.Label>
                                <Form.Control type={"text"} disabled value={this.state.address}/>
                            </Form.Group>
                        </Col>
                        <Col>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs>
                            <Form.Group>
                                <Form.Label>Suggested Price</Form.Label>
                                <Form.Control type={"number"} disabled value={this.state.price}/>
                            </Form.Group>
                        </Col>
                        <Col>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs>
                            <Form.Group>
                                <Form.Label>Total Amount Due</Form.Label>
                                <Form.Control type={"number"} disabled value={this.state.gallons * this.state.price}/>
                            </Form.Group>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Button onClick={this.onSubmitHandler}>Submit</Button>
                </Form>
            </Container>
            </div>
            </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        token: state.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelForm);
