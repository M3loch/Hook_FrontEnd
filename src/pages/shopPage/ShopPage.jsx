import { useContext, useState} from "react"
import { Context } from "../../App"
import OrderGrid from "./widgets/OrderGrid"
import CreateOrderModal from "./widgets/CreateOrderModal"


function ShopPage(){

    const {shop} = useContext(Context)

    const [createOrderModal, setCreateOrderModal] = useState(false)
    const [orders, setOrders] = useState([])

    return (
        <>
            <div>
                ==ShopHeader==
                <p>Shop Name = {shop.shopName.data}</p>
                <p>Shop ID = {shop.shopID}</p>
            </div>

            {createOrderModal && <CreateOrderModal setOrders={setOrders} 
                setCreateOrderModal={setCreateOrderModal}/>}

            <OrderGrid
                setCreateOrderModal={setCreateOrderModal}
                orders={orders}
                setOrders={setOrders}
            />
        </>

    )
}

export default ShopPage