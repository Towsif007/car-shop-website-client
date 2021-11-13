import React from 'react';

const MyReview = ({myreview}) => {

    const { username, productname, description, review} = myreview;
    return (
        <div>
            <div className="card bg-primary mx-5" style={{width: "25rem"}}>
            <div className="card-body">
            <h5 className="card-title">User Name: {username}</h5>
            <h6 className="card-subtitle mb-2">Product Name: {productname}</h6>
            <p className="card-text">Description: {description}</p>
            <h5>Review: {review}</h5>
            
        </div>
        </div>
        </div>
    );
};

export default MyReview;

