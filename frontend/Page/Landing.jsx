import { SignUpBotton } from "../components/spButton"
import { useNavigate } from "react-router-dom"
import { SignInBotton } from "../components/siButton";

export function Landing(){

    const navigate = useNavigate();

    return <div className="flex items-center justify-center h-screen bg-slate-400">

            <div>
                <SignUpBotton onClick = {()=>{
                navigate("/signUp")
            }} label = {"SignUp"}></SignUpBotton>
            </div>

            <div>
                <SignInBotton onClick = {()=>{
                navigate("/signIn")
            }} label = {"SignIn"}></SignInBotton>
            </div>

    </div>
}