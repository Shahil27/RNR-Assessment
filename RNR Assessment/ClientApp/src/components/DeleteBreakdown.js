import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class DeleteBreakdown extends Component {
    handleDelete = () => {
        this.props.onDelete(this.props.breakdownId);
    };

    render() {
        const { show, onClose } = this.props;

        return (
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Breakdown</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this breakdown?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={this.handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

