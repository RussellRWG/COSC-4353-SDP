import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Table, Container} from "react-bootstrap";

import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../store/actions/Auth';

class FuelHistory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            price: [
                {"price":1.99, "date":"01/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":100, "total":199},
                {"price":1.90, "date":"02/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":150, "total":285},
                {"price":1.95, "date":"03/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":120, "total":234},
                {"price":2.05, "date":"04/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":160, "total":328},
                {"price":1.91, "date":"05/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":140, "total":267.4},
                {"price":1.88, "date":"06/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":180, "total":338.4},
                {"price":1.93, "date":"07/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":210, "total":405.3},
                {"price":2.10, "date":"08/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":220, "total":462},
                {"price":2.15, "date":"09/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":130, "total":275.6},
                {"price":2.00, "date":"10/01/2020", "address":"1725 Slough Avenue, Scranton, Pennsylvania", "gallon":190, "total":380}
                ]
        }
    }

    componentDidMount = async () => {
        //await mapStateToProps(this.state);
        await this.props.isLoggedIn();

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

    render() {
        return (
            <div className="fuelhistory">
            <div id = "navigation">
                    <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>Website Name</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/profile">Client Profile</Nav.Link>
                        <Nav.Link href="/fuelform">Fuel Quote Form</Nav.Link>
                    </Nav>
                    <Nav.Link onClick = {this.onLogout}>
                        Logout
                    </Nav.Link>
                    </Navbar>

            </div>
            <div className = "outerfocus">
            <div className = "focus">
            <Container>
                <h1>Fuel Quote History</h1>
                <Table striped bordered hover size={"xs"}>
                    <th>Date</th><th>Price</th><th>Address</th><th>Gallon</th><th>Total</th>
                    <tbody>
                        {this.state.price.map((value,index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.date}</td>
                                    <td>${value.price}</td>
                                    <td>{value.address}</td>
                                    <td>{value.gallon}</td>
                                    <td>${value.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

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
        isLoggedIn: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelHistory);