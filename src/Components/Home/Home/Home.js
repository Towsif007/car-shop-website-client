import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MyReviews from '../MyReviews/MyReviews';
import Products from './../Products/Products';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Products></Products>
           <MyReviews></MyReviews>
            <About></About>
            
           
        </div>
    );
};

export default Home;