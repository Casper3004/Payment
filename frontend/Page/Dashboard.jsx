import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { UserComponents } from "../components/UserComponents";

export function Dashboard() {
    return <div>

        <AppBar></AppBar>

        <div className="ml-5 pt-6">
            <Balance></Balance>
        </div>
        
        <div>
            <UserComponents/>
        </div>

    </div>

}