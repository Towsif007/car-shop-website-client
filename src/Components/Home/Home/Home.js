import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Reviews from '../../Dashboard/Reviews/Reviews';
import Products from './../Products/Products';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <About></About>
            
           
        </div>
    );
};

export default Home;