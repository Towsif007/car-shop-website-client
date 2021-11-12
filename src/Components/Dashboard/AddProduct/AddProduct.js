import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
      console.log(data);

      axios.post('http://localhost:5000/addexplores', data)
      .then(res => {
        if(res.data.insertedId){
            console.log(res)
            alert('Inserted successfully')
            reset()
        }
      })
    }

    return (
        <div className="add-product">
            <h1>Add A Product</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}  placeholder="Name" />
      <textarea {...register("description")}  placeholder="Description" />
      <input  type="number" {...register("price")}  placeholder="Price" />
      <input {...register("img")} placeholder="Image Url" />

      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;
