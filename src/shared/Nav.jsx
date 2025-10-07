import { useContext } from "react";
import { NavLink } from "react-router";
import { Context } from "../App";

import profile from '../../public/assets/profile.svg'
import logo from '../../public/assets/logo.svg'
import shopImg from '../../public/assets/shop.svg'
import shopSettings from '../../public/assets/shopSettings.svg'

import './styles/nav.css'
function Nav(){
    const {user, shop} = useContext(Context)

    return(
        <div className="nav">
            <NavLink style={{marginLeft: '10px'}} to="/"><img src={logo} className="logo"/></NavLink>
            {
                shop.isChosen
                    ? 
                        <>
                            <NavLink style={{marginLeft: '10px'}} to="/shop"><img src={shopImg} className="shop"/></NavLink>
                        </>
                    : 
                    null
            }
            {
                shop.isChosen && shop.pages["shop_settings"]
                    ?<NavLink style={{marginLeft: '10px'}} to="/shopSettings"> <img className="shop-settings" src={shopSettings} /></NavLink>
                    : null
            }
            {
                user.isAuth
                    ?   
                        <>
                            <NavLink 
                                style={{marginLeft: '10px'}} 
                                to="/settings" 
                            >
                                <img className="profile" src={profile} />
                            </NavLink>
                        </>
                    : null
                }
        </div>
    )
}

export default Nav