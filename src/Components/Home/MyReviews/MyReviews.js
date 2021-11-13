import React, { useEffect, useState } from 'react';
import MyReview from '../MyReview/MyReview';
import './MyReviews.css'

const MyReviews = () => {
    const [myreviews, setMyReviews] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setMyReviews(data))
    }, [])
    return (
        <div>
            <h1 className="mt-3">MyReviews</h1>
            <div className="my-reviews my-5">
            {
                myreviews.map(myreview => <MyReview
                    key = {myreview._id}
                    myreview = {myreview}
                
                ></MyReview>)
            }
            </div>

        </div>
    );
};

export default MyReviews;