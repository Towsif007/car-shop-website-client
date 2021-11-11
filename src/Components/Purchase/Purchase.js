import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const {carId} = useParams();
    const [car, setCar] = useState({})
    const {user} = useAuth()

    useEffect(() =>{
        fetch(`http://localhost:5000/explores/${carId}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, []);

    const handlePurchaseSubmit = e =>{
        e.preventDefault()
        alert("submit")
    }


    return (
        <div className="purchase">
            <h1>This is a purchase page: {carId} </h1> 
            <div class="card purchase my-5" style={{width: "25rem"}}>
            <img src={car.img} class="card-img-top" alt="..."/>
            <div className="card-body">
            <h4>Name: {car.name} </h4>
            <h4>Name: {car.price} </h4>
             <p className="card-text"> Details: {car.description}</p>
            </div>
            </div>

            {/* Purchase Form */}

            <form onSubmit={handlePurchaseSubmit}>
            <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label fw-bold">Email :</label>
        <input type="email" value={user.email} class="form-control" id="exampleFormControlInput1" placeholder= "Email"/>
        </div>
        <label for="exampleFormControlInput1" class="form-label fw-bold">Name :</label>
        <input type="text" value={user.displayName} class="form-control" id="exampleFormControlInputexampleFormControlInput1" placeholder="Name"/>

        <label for="exampleFormControlInput1" class="form-label fw-bold">Address :</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address"/>

        <label for="exampleFormControlInput1" class="form-label fw-bold">City :</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City"/>
        <label for="exampleFormControlInput1" class="form-label fw-bold">Phone No. :</label>
        <input type="text" class="form-control mb-4" id="exampleFormControlInput1" placeholder="Phone No."/>

        <div class="col-12 mt-3 mb-5">
            <button type="submit" class="btn btn-dark px-4">Submit</button>
            </div>
            </form>
        </div>
    );
};

export default Purchase;