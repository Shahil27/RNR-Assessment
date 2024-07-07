import React, { Component } from "react";
import { AddBreakdown } from './AddBreakdown'; 
import { EditBreakdown } from './EditBreakdown';
import { DeleteBreakdown } from './DeleteBreakdown';
import { Button } from "react-bootstrap";

export class Breakdowns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakdownsData: [],
            showModal: false,
            showEditModal: false,
            currentBreakdown: null,
            breakdownToDelete: null
        };
    }

    componentDidMount() {
        this.getBreakdownsData();
    }

    getBreakdownsData = () => {
        fetch("api/Breakdowns")
            .then((res) => res.json())
            .then((data) => this.setState({ breakdownsData: data }));
    }

    handleSaveBreakdown = (newBreakdown) => {
        fetch("api/Breakdowns", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBreakdown)
        })
            .then(() => this.getBreakdownsData()); // Refresh the list after adding
        this.setState({ showModal: false });
    };

    handleUpdateBreakdown = (updatedBreakdown) => {
        fetch(`api/Breakdowns/${updatedBreakdown.breakdownId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBreakdown)
        })
            .then(() => this.getBreakdownsData());
        this.setState({ showEditModal: false });
    };

    handleDeleteBreakdown = (breakdownId) => {
        fetch(`api/Breakdowns/${breakdownId}`, {
            method: "DELETE"
        })
            .then(() => this.getBreakdownsData());
        this.setState({ showDeleteModal: false });
    };

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    handleShowEditModal = (breakdown) => {
        this.setState({ showEditModal: true, currentBreakdown: breakdown });
    };

    handleCloseEditModal = () => {
        this.setState({ showEditModal: false, currentBreakdown: null });
    };

    handleShowDeleteModal = (breakdownId) => {
        this.setState({ showDeleteModal: true, breakdownToDelete: breakdownId });
    };

    handleCloseDeleteModal = () => {
        this.setState({ showDeleteModal: false, breakdownToDelete: null });
    };

    render() {
        const { breakdownsData, showModal, showEditModal, showDeleteModal, currentBreakdown, breakdownToDelete } = this.state;

        return (
            <>
                <h2>Breakdowns</h2>

                <Button variant="primary" onClick={this.handleShowModal}>
                    Add Breakdown
                </Button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date of Breakdown</th>
                            <th>Driver Name</th>
                            <th>Registration Number</th>
                            <th>Company Name</th>
                            <th>Reference</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {breakdownsData.map(item =>
                            <tr key={item.breakdownId}>
                                <td>{item.breakdownDate}</td>
                                <td>{item.driverName}</td>
                                <td>{item.registrationNumber}</td>
                                <td>{item.companyName}</td>
                                <td>{item.breakdownReference}</td>
                                <td>
                                    <Button variant="warning" onClick={() => this.handleShowEditModal(item)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => this.handleShowDeleteModal(item.breakdownId)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

                <AddBreakdown
                    show={showModal}
                    onClose={this.handleCloseModal}
                    onSave={this.handleSaveBreakdown}
                />

                {currentBreakdown && (
                    <EditBreakdown
                        show={showEditModal}
                        onClose={this.handleCloseEditModal}
                        onSave={this.handleUpdateBreakdown}
                        breakdown={currentBreakdown}
                    />
                )}

                {breakdownToDelete && (
                    <DeleteBreakdown
                        show={showDeleteModal}
                        onClose={this.handleCloseDeleteModal}
                        onDelete={this.handleDeleteBreakdown}
                        breakdownId={breakdownToDelete}
                    />
                )}
            </>
        );
    }
}

