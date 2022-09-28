import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTimesCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

let schema = yup.object().shape({
  name:yup.string().min(6).max(25).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(8).required(),
});

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit=(data)=>{
    console.log(data);
  }
  console.log(errors);

  return (
    <div className="container grid grid-rows-6 grid-flow-col content-center gap-4 px-5 my-auto">
      <div className="row-span-1">
        <div className="text-5xl text-emerald-500 text-center">
          Create Your Account
        </div>
      </div>
      <div className="row-span-1">
        <p className="text-emerald-500 text-2xl text-center">
          Register yourself to get the full access!
        </p>
      </div>
      <div className="row-span-4">
        <form className="container grid grid-rows-4 grid-flow-col content-center gap-2 my-auto" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
          <div className="row-span-1  py-2 mx-auto">
            <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors&&errors.name?'border-red-500':''}`}
              id="name"
              type="text"
              placeholder="Enter your Full Name"
              {...register("name")}
            />
            {errors&&errors.name?<p class="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">{errors.name.message}</p>:<></>}
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors&&errors.email?'border-red-500':''}`}
              id="email"
              type="text"
              placeholder="Enter your Email address"
              {...register("address")}
            />
            {errors&&errors.email?<p class="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">{errors.email.message}</p>:<></>}
          </div>
          <div className="row-span-1 items-center py-2  mx-auto">
            <input
              className={`shadow appearance-none border rounded w-96 ml-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors&&errors.email?'border-red-500':''}`}
              id="password"
              type="password"
              placeholder="Enter your Password"
              {...register("password")}
            />
            {errors&&errors.password?<p class="text-red-500 text-xs italic w-96 ml-6 py-2 px-3">{errors.password.message}</p>:<></>}
          </div>
          <div className="row-span-1 items-center py-2 mx-auto">
            <input
              className="bg-emerald-500 border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded-full w-25"
              type="submit"
              value="Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
