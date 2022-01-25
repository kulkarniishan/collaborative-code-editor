import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTimesCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function Register() {
  return (
    <div className="container grid grid-rows-6 grid-flow-col content-center gap-4 px-5 my-auto">
      <div className="row-span-1">
        <div className="text-5xl text-emerald-500 text-center">
          Create Your Account
        </div>
      </div>
      <div className="row-span-1">
        <p className="text-emerald-500 text-2xl text-center">
          Login to get started
        </p>
      </div>
      <div className="row-span-4">
        <div className="container grid grid-rows-4 grid-flow-col content-center gap-2 my-auto">
          <div className="row-span-1  py-2 mx-auto">
            <input
              className="shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registerName"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            <input
              className="shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registerEmail"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            <input
              className="shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regsiterPassword"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="row-span-1 items-center py-2 mx-auto">
            <input
              className="bg-emerald-500 border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded w-25"
              type="submit"
              value="Confirm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
