import { useContext, useState } from "react"
import { Context } from "../../App"
import ShopCard from "./widgets/ShopCard"

function UserPage() {
    const { user } = useContext(Context)
    const shops = user.getShops


    return (
        user.isAuth
            ?
                <>
                    <p>user id = {user.userID}</p>
                    <p>user phone number = {user.phoneNumber}</p>
                    {shops.map((shop) => {return <ShopCard key={shop.shop_id} shopName={shop.shop_name} shopID={shop.shop_id}/> })}
                    <p>user first name = {user.firstName}</p>
                    <p>user family name = {user.familyName}</p>
                    <p>user access token = {user.accessToken}</p>
                </>
            : null

    )
}

export default UserPage