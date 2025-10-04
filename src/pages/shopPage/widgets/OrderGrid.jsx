import { useContext, useEffect, useState } from "react"
import { Context } from "../../../App"
import OpenCreateModalButton from "./OpenCreateModalButton"
import Order from "./Order"
import OrderEntity from "../../../entities/order"


function OrderGrid({
    setCreateOrderModal,
}) {

    const {shop, orders} = useContext(Context)
    const [ordersState, setOrdersState] = useState([])
    useEffect(() => {
        orders.init(ordersState, setOrdersState)
        async function getOrders() {
            const newOrders = await shop.getOrders()
            orders.updateList(newOrders)
        }
        getOrders()
        setInterval(getOrders, 60000)
        orders.start()
    }, [])
    
    return(
        <>
            {ordersState.map((order) => 
                {
                    return (
                        <Order 
                            key={order.orderID}
                            order={order} 
                        /> 
                    )
                } 
            )}
            <OpenCreateModalButton 
                setCreateOrderModal={setCreateOrderModal} 
            />
        </>
    ) 
}

export default OrderGrid