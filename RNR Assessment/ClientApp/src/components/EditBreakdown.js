import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class EditBreakdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakdownReference: props.breakdown.breakdownReference || "",
            companyName: props.breakdown.companyName || "",
            driverName: props.breakdown.driverName || "",
            registrationNumber: props.breakdown.registrationNumber || "",
            breakdownDate: props.breakdown.breakdownDate || ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        const { breakdownReference, companyName, driverName, registrationNumber, breakdownDate } = this.state;
        const updatedBreakdown = {
            breakdownId: this.props.breakdown.breakdownId,
            breakdownReference,
            companyName,
            driverName,
            registrationNumber,
            breakdownDate
        };
        this.props.onSave(updatedBreakdown);
    };

    render() {
        const { show, onClose } = this.props;
        const { breakdownReference, companyName, driverName, registrationNumber, breakdownDate } = this.state;

        return (
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Breakdown</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form><Form.Group controlId="formBreakdownDate">
                        <Form.Label>Date of Breakdown</Form.Label>
                        <Form.Control
                            type="date"
                            name="breakdownDate"
                            value={breakdownDate}
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
                        <Form.Group controlId="formCompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="companyName"
                                value={companyName}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        {/*<Form.Group controlId="formBreakdownReference">*/}
                        {/*    <Form.Label>Reference</Form.Label>*/}
                        {/*    <Form.Control*/}
                        {/*        type="text"*/}
                        {/*        name="breakdownReference"*/}
                        {/*        value={breakdownReference}*/}
                        {/*        onChange={this.handleChange}*/}
                        {/*    />*/}
                        {/*</Form.Group>*/}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

