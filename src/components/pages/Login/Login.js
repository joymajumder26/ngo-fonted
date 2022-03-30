import React from 'react';
import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log("data", data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data })
        };
        // fetch('https://reqres.in/api/posts', requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({ postId: data.id }));
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                console.log("res",res);
            })
      });
    return (
        <div className='register-form '>
            
            <div className="flex-container">
            
            <div className="left-form-container">
            <h2>Welcome to Smile Care</h2>
            <h4>Please Login Here</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" {...register("email", { required: true })} class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password"  {...register("Password", { required: true, maxLength: 10 })} class="form-control" id="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
        <div className="right-form-container">
        
        </div>
        </div>
        </div>
    );
};

export default Login;