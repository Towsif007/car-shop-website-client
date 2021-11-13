import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Reviews.css'

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addreviews', data)
        .then(res => {
          if(res.data.insertedId){
              console.log(res)
              alert('Inserted successfully')
              reset()
          }
        })
    }



    return (
        <div className="reviews">
            <h1>This is reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="User Name :" />
      <input {...register("name")} placeholder="Product Name :" />
      <textarea {...register("description")} placeholder="Description :" />
      <input type="number" {...register("review", { min: 1, max: 5 })} placeholder="Your Review:" />
      <input className="btn btn-primary" type="submit" />
    </form>
         
        </div>
    );
};

export default Reviews;