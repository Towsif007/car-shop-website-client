import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Reviews.css'

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://immense-badlands-19935.herokuapp.com/addreviews', data)
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
      <textarea {...register("username")} placeholder="User Name :" />
      <textarea {...register("name")} placeholder="Product Name :" />
      <textarea {...register("description")} placeholder="Description :" />
      <input type="number" {...register("review", { min: 1, max: 5 })} placeholder="Your Review: (out of 5)" />
      <input className="btn btn-primary" type="submit" />
    </form>
         
        </div>
    );
};

export default Reviews;