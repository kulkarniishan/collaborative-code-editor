import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTimesCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="bg-transparent">
      <div className="space-y-4">
        <div className="text-5xl text-emerald-500 text-center">
          Welcome Back!
        </div>
        <p className="text-emerald-500 text-2xl text-center">
          Login to get started
        </p>
        <div className="row-span-1  py-2">
          <input
            className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userEmail"
            type="text"
            placeholder="Enter registered Email"
          />
        </div>
        <div className="row-span-1 items-center py-2">
          <input
            className="shadow appearance-none border rounded w-75 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="row-span-1 items-center py-2">
          <input
            className="bg-emerald-500 border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded w-25"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
