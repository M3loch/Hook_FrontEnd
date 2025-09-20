import { Link } from "react-router";


function TestNav(){


    return(
        <div className="TestNav">
            <Link to="/">HookDig</Link>
            <Link to="/me">User</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/settings">User Settings</Link>
        </div>
    )
}

export default TestNav