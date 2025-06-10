import {BrowserRouter, Routes, Route} from "react-router-dom"
import { SignUp } from "../Page/SignUp"
import { SignIn } from "../Page/SignIn"
import { Balance } from "../components/Balance"
import { UserComponents } from "../components/UserComponents"
import { Dashboard } from "../Page/Dashboard"
import { Landing } from "../Page/Landing"

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Landing/>}></Route>
            <Route path = "/signUp" element = {<SignUp />}></Route>
            <Route path = "/signIn" element = {<SignIn />}></Route>
            // <Route path = "/dashboard" element = {<Dashboard />}></Route>
            {/* <Route path = "/send" element = {<SendMoney />}></Route> */}
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
