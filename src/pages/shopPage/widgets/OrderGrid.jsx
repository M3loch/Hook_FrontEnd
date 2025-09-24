import { useContext, useEffect, useState } from "react"
import { Context } from "../../../App"
import OpenCreateModalButton from "./OpenCreateModalButton"
import Order from "./Order"


function OrderGrid({
    setCreateOrderModal,
    orders,
    setOrders
}) {

    const {shop} = useContext(Context)

    useEffect(() => {

        async function getOrders() {
            const newOrders = await shop.getOrders()
            setOrders(newOrders)
 
        }

        getOrders()

        setInterval(getOrders, 60000)
    }, [])

    return(
        <>
            {orders.map((order) => 
                {
                    return (
                        <Order 
                            key={order.order_id} 
                            order={order} 
                            setOrders={setOrders}
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