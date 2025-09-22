import { useContext } from "react"
import { Context } from "../../../App"
import { Link } from "react-router"




function ShopCard({shopName, shopID}){

    const { shop } = useContext(Context)
    
    return(
        <Link to="/shop">
            <div 
                style={
                    {
                        background: "lightBlue",
                        cursor: 'pointer'
                    }
                }
                onClick={() => {
                    shop.getShop(shopID);
                }}
            >
                <p>{shopName}</p>
                <p>{shopID}</p>
            </div>
        </Link>
    )
}
export default ShopCard