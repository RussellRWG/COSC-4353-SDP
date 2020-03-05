import React from "react";
import {Table, Container} from "react-bootstrap";

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

    render() {
        return (
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
        );
    }
}

export default FuelHistory;