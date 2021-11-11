import React from 'react';
import car from '../../../Images/car/car.jpg'

const About = () => {
    return (
        <div>
            <h1 className="fw-bold text-danger">About Us</h1>

            <div className="card mb-12 my-5 mx-5" style={{width: "80rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{height: "17rem"}} src={car} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body bg-dark text-white">
        <p className="card-text fs-2">We are one of the most popular brand car seller company in the world. We are so much professional of this profession. We are so helpful. Our after sale service is so good. Personal benefits include on-demand transportation, mobility, independence, and convenience. </p>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;