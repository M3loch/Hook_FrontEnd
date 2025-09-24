import { useContext } from "react"
import { Context } from "../../../App"
import { Link, useNavigate } from "react-router"




function ShopCard({shopName, shopID}){

    const navigate = useNavigate()
    const { shop } = useContext(Context)

    async function getShopPage(){
        await shop.getShop(shopID)
        navigate('/shop')
    }
    
    return(
        <div 
            style={
                {
                    background: "lightBlue",
                    cursor: 'pointer'
                }
            }
            onClick={getShopPage}
        >
            <p>{shopName}</p>
            <p>{shopID}</p>
        </div>
    )
}
export default ShopCard