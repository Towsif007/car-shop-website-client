import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const {carId} = useParams();
    const [car, setCar] = useState({})
    const {user} = useAuth()

    const purchaseInfo = {customerName: user.displayName, email: user.email, address: '', city: '', phone: '' }
    const [purchase, setPurchase] = useState(purchaseInfo);
    

    useEffect(() =>{
        fetch(`http://localhost:5000/explores/${carId}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, []);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...purchase};
        newInfo[field] = value;
        console.log(newInfo);
        setPurchase(newInfo);
    }

    const handlePurchaseSubmit = e =>{
        e.preventDefault()
        
        const carPurchase = {
            ...purchase,
            carId,
            carname: car.name,
            price: car.price
        }
        // send to the server
        console.log(carPurchase);
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carPurchase)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Data Inserted successfully')
 
            }
        })
    }


    return (
        <div className="purchase">
            <h1>This is a purchase page: {carId} </h1> 
            <div className="card purchase my-5" style={{width: "25rem"}}>
            <img src={car.img} class="card-img-top" alt="..."/>
            <div className="card-body">
            <h4>Name: {car.name} </h4>
            <h4>Price: {car.price} </h4>
             <p className="card-text"> Details: {car.description}</p>
            </div>
            </div>

            {/* Purchase Form */}

            <form onSubmit={handlePurchaseSubmit}>
            <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label fw-bold">Email :</label>
        <input type="email" onBlur={handleOnBlur} name="email" value={user.email} className="form-control" id="exampleFormControlInput1" placeholder= "Email"/>
        </div>
        <label for="exampleFormControlInput1" className="form-label fw-bold">Name :</label>
        <input type="text" onBlur={handleOnBlur} name="customerName" value={user.displayName} className="form-control" id="exampleFormControlInputexampleFormControlInput1" placeholder="Name"/>

        <label for="exampleFormControlInput1" className="form-label fw-bold">Address :</label>
        <input type="text" onBlur={handleOnBlur} name="address" className="form-control" id="exampleFormControlInput1" placeholder="Address"/>

        <label for="exampleFormControlInput1" className="form-label fw-bold">City :</label>
        <input type="text" onBlur={handleOnBlur} name="city" className="form-control" id="exampleFormControlInput1" placeholder="City"/>

        <label for="exampleFormControlInput1" className="form-label fw-bold">Phone No. :</label>
        <input type="text" onBlur={handleOnBlur} name="phone" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Phone No."/>

        <div className="col-12 mt-3 mb-5">
            <button type="submit" className="btn btn-dark px-4">Submit</button>
            </div>
            </form>
        </div>
    );
};

export default Purchase;