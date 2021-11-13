import React from 'react';
import banner from '../../../Images/Banner/carbanner.jpg'

const Banner = () => {
 return (
        <div> 
     <h1 className="heading text-dark p-4">Bangladesh Car House</h1>
     <img src={banner} className="img-fluid " alt="..."></img>
        </div>
    );
};

export default Banner;


 
