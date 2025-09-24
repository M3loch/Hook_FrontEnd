import { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../App";


function TestNav(){
    const {user, shop} = useContext(Context)

    return(
        <div className="TestNav">
            <Link style={{marginLeft: '10px'}} to="/">HookDig</Link>
            {
                user.isAuth
                    ?   
                        <>
                            <Link style={{marginLeft: '10px'}} to="/me">User</Link>
                            <Link style={{marginLeft: '10px'}} to="/settings">User Settings</Link>
                        </>
                    : null
                }
            {
                shop.isChosen
                    ? 
                        <>
                            <Link style={{marginLeft: '10px'}} to="/shop">Shop</Link>
                            <Link style={{marginLeft: '10px'}} to="/shopSettings">Shop Settings</Link>
                        </>
                    : 
                        null
            }
        </div>
    )
}

export default TestNav