import { useEffect } from "react";
import axios from "axios";

export function Balance() {

    // const [balance, setBalance] = ("");

    // useEffect(() => {

    //     const token = localStorage.getItem("token")

    //     axios.get("http://localhost:3000/api/v1/account/balance",{
    //         headers : {
    //             authorization : `Bearer ${token}`
    //         }
    //     })
    //         .then(response => {
    //             setBalance(response.data.balance)
    //         })
    // },[balance])

    return <div className="flex gap-5  pl-5">
        <div className="font-bold text-xl">
            Your Balance
        </div>

        <div className="font-medium text-xl">
            $2000
        </div>
    </div>

}