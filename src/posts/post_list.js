import React, { Component } from 'react';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';
import data from '../data.json';

class Cars extends Component {
    state = {
        search: "",
        showModal: 0
    };
    getModal = value => {
        this.setState({ showModal: value });
    }
    hideModal = value => {
        this.setState({ showModal: 0 })
    }

    renderCar = data => {
        return (
            <div key={data.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={data.imageUrl} alt={data.vehicle} />
                    <div className="card-body">
                        <p className="card-text">{data.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <ul list-style-type="none">
                                    <li>
                                        <i className="fa fa-chevron-right" ></i>
                                        <strong>Year:</strong>
                                        {data.year}
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right" ></i>
                                        <strong>Model:</strong>
                                        {data.vehicle}
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right" ></i>
                                        <strong>mileage:</strong>
                                        {data.mileage}
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right" ></i>
                                        <strong>Color:</strong>
                                        {data.color}
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right" ></i>
                                        <strong>Selling Price:</strong>
                                        {data.sellingPrice}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Button variant="primary" onClick={() => this.getModal(data.id)}>View</Button>
                    </div>
                </div>
                {/* modal start */}
                <Modal show={this.state.showModal === data.id} onHide={() => this.hideModal(data.id)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.vehicle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{data.description}
                        <div>
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={data.imageUrl} alt={data.vehicle} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {/* modal end */}
            </div>
        );
    }
    onchange = e => {
        this.setState({ search: e.target.value });
    };
    render() {
        const { search } = this.state;
        const filteredCars = data.filter(car => {
            return car.vehicle.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            
        });
        return (
            <div>
                <center>
                    <h3>
                        VMG Software
                    </h3>
                    <div>
                        <input
                            className="form-control-sm mb-4"
                            label="Search Car"
                            onChange={this.onchange}
                            placeholder="Search Cars..."
                        />
                    </div>
                </center>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {filteredCars.map(car => {
                                return this.renderCar(car);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cars;


