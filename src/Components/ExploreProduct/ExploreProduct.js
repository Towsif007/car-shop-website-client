import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProduct = ({exploreproduct}) => {

    const { _id, name, price, description, img} = exploreproduct;
    return (
        <div>
         <div className="card" >
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <h5 className="card-title">Price: {price}</h5>
            <p className="card-text fs-3">Details: {description}</p>
            <Link to={`/purchase/${_id}`} >
                <button className="btn btn-danger">Purchase Now</button>
            </Link>
    </div>
    </div>
        </div>
    );
};

export default ExploreProduct;