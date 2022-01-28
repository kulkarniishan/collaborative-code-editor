import * as yup from 'yup'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTimesCircle } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
});

function LogIn() {
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver:yupResolver(schema),
    });


    return (
        <div className="">
             <div className="space-y-4">
                <div className="row-span-1  py-2">
                    <input className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userEmail" type="text" placeholder="Enter registered Email"  />
                </div>
                <div className="row-span-1 items-center py-2">
                    <input className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="States (Space Separated)" />
                </div>
             </div>
        </div>
    )
}

export default LogIn