import React from "react";
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.min.css";
import {Form, Container, Col, Row} from "react-bootstrap";

class FuelForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gallons: 0,
            price: 1.99,
            selectedDate: new Date()
        }
    }


    onChangeGallonsHandler = (e) =>{
        this.setState({gallons: e.target.value})
    };

    changeDate = (date) => {
        this.setState({selectedDate: date})
    };


    render() {
        return (
            <Container>
                <h1>Fuel Form</h1>
                <Form>
                    <Row>
                        <Col xs>
                            <Form.Group>
                                <Form.Label>Gallons Requested</Form.Label>
                                <Form.Control type={"number"} min={0} onChange={this.onChangeGallonsHandler}/>
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
                                <Form.Control type={"text"} disabled value={"1725 Slough Avenue, Scranton, Pennsylvania"}/>
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
                </Form>
            </Container>
    );
    }

}

export default FuelForm;