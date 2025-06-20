import axios from "axios";
import { useEffect, useState } from "react"
import { Button } from "./buttonComponent";


export function UserComponents() {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/bulk?filter=${filter}`)
            .then((response) => {
              setUsers(response.data.user)  
            })

    }, [filter]);


    return <div className="flex flex-col ml-10 mt-5">

        <div className="w-340">

            <div className="font-semibold text-xl">
                Users
            </div>

            <div>
                <input onChange={(e) => {
                    setFilter(e.target.value)
                }} type="text" placeholder="Search User" className="w-full px-2 py-1 border rounded border-slate-200 mt-4"></input>
            </div>

            <div>
                {users.map(user => <User key ={user._id} user={user} />)}
            </div>

        </div>

    </div>

    

}

function User({ user }) {
        return <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-ful">
                <Button label={"Send Money"} />
            </div>
        </div>
    }