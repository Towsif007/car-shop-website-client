import React, { useEffect, useState } from 'react';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import './ExploreProducts.css'

const ExploreProducts = () => {
    const [exploreproduct, setexploreproduct] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/explores')
        .then(res => res.json())
        .then(data => setexploreproduct(data))
    }, [])


    return (
        <div>
        <h1 className="mt-3">You can explore here more products from our shop</h1>

        <div className="explore-product mt-5">
             {
                exploreproduct.map(exploreproduct => <ExploreProduct
                    key = {exploreproduct.id}
                    exploreproduct = {exploreproduct}
                
                ></ExploreProduct>)
            }

        </div>
        </div>
    );
};

export default ExploreProducts;