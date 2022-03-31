import React from 'react';
import { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import '../pages/Css/Education.css';




const Education = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log("data", data)
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({data })
      };
      fetch('https://reqres.in/api/posts', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ postId: data.id }));
  };

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(res => {
              console.log("res",res);
          })
    });
  return (
    <main>
      <h1 className='d-flex justify-content center'>Education</h1>
       <div className='register-forms'>
             <div className="flex-container">
            
            <div className="left-form-container">
            <h2>Welcome to Smile Care</h2>
            <h4>Please input Here</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleInputBook" class="form-label">Which type of Book donate</label>
                    <input {...register("bookName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputBook" />
                </div>
                <div class="mb-3">
                    <label for="howmuchdonate" class="form-label">How much Book donate </label>
                    <input type='number' {...register("bookQuantity", { required: true })} class="form-control" id="howmuchdonate" />
                </div>
                <div class="mb-3">
                    <label for="Amount" class="form-label">Amount</label>
                    <input type='number' {...register("bookAmount", { required: true })} class="form-control" id="Amount" />
                </div>
                <div class="mb-3">
                    <label for="area" class="form-label">Donation Area</label>
                    <input  {...register("area", { required: true })} class="form-control" id="area" />
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="img" >
        
        </div>
        </div>
        </div>

    </main>
  );
};

export default Education;
