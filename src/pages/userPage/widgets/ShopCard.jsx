import { useContext } from "react"
import { Context } from "../../../App"
import { useNavigate } from "react-router"

import '../styles/shopCard.css'


function ShopCard({shopName, shopID}){

    const navigate = useNavigate()
    const { shop } = useContext(Context)

    async function getShopPage(){
        await shop.getShop(shopID)
        navigate('/shop')
    }
    
    return(
        <div 
            className="shop-card"
            onClick={getShopPage}
        >
            <p className="shop-name">{shopName}</p>
            <p className="shop-id">{shopID}</p>
        </div>
    )
}
export default ShopCard