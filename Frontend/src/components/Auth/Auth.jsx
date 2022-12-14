import { useState } from "react";
import Register from "./Register/register";
import LogIn from "./LogIn/logIn";


const Transition = ({setLoginActive, set, name})=>(
  <div className="container grid grid-rows-3 grid-flow-col content-center gap-4 px-5 my-auto ">
    <div className="text-5xl text-white text-center">Welcome Back</div>
    <p className="text-white text-center">To keep connected with tus please Register with your personal info</p>
    <div className="row-span mx-auto">
      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-500 text-white font-bold py-2 px-10 rounded-full w-25" onClick={()=>setLoginActive(set)}>
        {name}
      </button>
    </div>
  </div>
)

export default function Auth() {
  const [loginActive, setLoginActive] = useState(true);
  return (
    <div className="grid grid-cols-6 h-screen ">
      <div className={`${loginActive? 'bg-emerald-500 col-span-2': 'bg-white col-span-4'} flex`}>
        {loginActive ? (
         <Transition setLoginActive={setLoginActive} set={false} name={"Register"}/>
        ) : (
          <Register />
        )}
      </div>
      <div className={`${!loginActive? 'bg-emerald-500 col-span-2': 'bg-white col-span-4'} flex`}>
      {!loginActive ? (
         <Transition setLoginActive={setLoginActive} set={true} name={"Login"}/>
        ) : (
          <LogIn />
          )}
      </div>
    </div>
  );
}
