import { useState } from "react"
import { BottomWarning } from "../components/bottomWarning"
import { Button } from "../components/buttonComponent"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/inputButton"
import { SubHeading } from "../components/sub_heading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const SignIn = () => {

    const navigate = useNavigate();

    const [userName , setuserName] = useState("");
    const [passWord , setpassWord] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <InputBox onChange = {e=>{
            setuserName(e.target.value);
        }}placeholder="preet@gmail.com" label={"Email"} />

        <InputBox onChange={e=>{
            setpassWord(e.target.value);
        }} placeholder="123456" label={"Password"} />

        <div className="pt-4">

          <Button onClick = {async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/signIn",{
                userName,
                passWord,
            })

            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");

          }}label={"Sign In"} />

        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signUp"} />

      </div>
    </div>
  </div>
}