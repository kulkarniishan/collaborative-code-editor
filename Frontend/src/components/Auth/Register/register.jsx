import * as yup from 'yup'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTimesCircle } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

function Register() {
    
    return (
        <div className="bg-transparent">
             <div className="space-y-4">
                <div className="row-span-1  py-2">
                    <input className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter registered Email"  />
                </div>
                <div className="row-span-1 items-center py-2">
                    <input className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="States (Space Separated)"  />
                </div>
                <div className="row-span-1 items-center py-2">
                    <input className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="States (Space Separated)"  />
                </div>
             </div>
        </div>
    )
}

export default Register