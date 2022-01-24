import { useState } from "react";
import Register from "./Register/register";
import LogIn from "./LogIn/logIn";


export default function Auth() {
    const [loginActive, setLoginActive] = useState(true);
    return (
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-red-100"><Register/></div>
        <div className="bg-green-200"><LogIn/></div>
      </div>
    );
}
