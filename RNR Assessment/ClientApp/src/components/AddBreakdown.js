import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class AddBreakdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //breakdownReference: "",
            companyName: "",
            driverName: "",
            registrationNumber: "",
            breakdownDate: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        const { companyName, driverName, registrationNumber, breakdownDate } = this.state;
        const newBreakdown = { companyName, driverName, registrationNumber, breakdownDate };
        this.props.onSave(newBreakdown);
    };

    render() {
        const { show, onClose } = this.props;
        const { breakdownReference, companyName, driverName, registrationNumber, breakdownDate } = this.state;

        return (
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Breakdown</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/*<Form.Group controlId="formBreakdownReference">*/}
                        {/*    <Form.Label>Reference</Form.Label>*/}
                        {/*    <Form.Control*/}
                        {/*        type="text"*/}
                        {/*        name="breakdownReference"*/}
                        {/*        value={breakdownReference}*/}
                        {/*        onChange={this.handleChange}*/}
                        {/*    />*/}
                        {/*</Form.Group>*/}
                        <Form.Group controlId="formCompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="companyName"
                                value={companyName}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDriverName">
                            <Form.Label>Driver Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="driverName"
                                value={driverName}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formRegistrationNumber">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="registrationNumber"
                                value={registrationNumber}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBreakdownDate">
                            <Form.Label>Date of Breakdown</Form.Label>
                            <Form.Control
                                type="date"
                                name="breakdownDate"
                                value={breakdownDate}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Save Breakdown
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

//export class AddNewBreakdown extends Component {
//    render() {
//        return (
//            <>
//                <h1>testing</h1>
//            </>
//        )
//    }
//}

