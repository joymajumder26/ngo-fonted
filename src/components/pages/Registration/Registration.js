
import React, { useEffect, useState } from 'react';

import './Registration.css'
import { useForm } from "react-hook-form";

const Registration = () => {

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
        // registration info input
        <div className='register-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleInputFirstName" class="form-label">First Name </label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} class="form-control" id="exampleInputFirstName" />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name </label>
                    <input {...register("lastName", { required: true })} class="form-control" id="lastName" />
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">UserName</label>
                    <input {...register("username", { required: true })} class="form-control" id="username" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" {...register("email", { required: true })} class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password"  {...register("Password", { required: true, maxLength: 10 })} class="form-control" id="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );

};


export default Registration;