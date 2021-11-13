import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
     
    const url= 'https://immense-badlands-19935.herokuapp.com/explores'
     const someProducts =  products.slice(1,7)
    useEffect(()=> {  
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className=" my-4">
         <h1 className=" text-danger">Welcome To Our Car Shops</h1>
        <div className="products-container my-5 mx-5">    
            {
                someProducts.map(product => <Product
                key = {product._id}
                product = {product}
                ></Product>)
            }
         </div>
        </div>
    );
};

export default Products;