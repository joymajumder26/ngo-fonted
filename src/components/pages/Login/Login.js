import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const userData = {
            email: data.email,
            password: data.password
        }
        console.log("🚀 ~ file: Registration.js ~ line 39 ~ Registration ~ userData", JSON.stringify(userData))

        fetch("http://localhost:5000/api/signin", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json())
            .then(response => {
                // window.location.reload()
                console.log("response", response)
                e.target.reset()

            })
    };

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log("res",res);
        //     })
    });
    return (
        <div className='register-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" {...register("email", { required: true })} class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password"  {...register("password", { required: true, maxLength: 10 })} class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;