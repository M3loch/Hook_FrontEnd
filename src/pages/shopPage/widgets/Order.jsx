import { useState } from "react"
import Button from "../../../shared/Button"
import CloseOrderModal from "./CloseOrderModal"


function Order({order, setOrders }){
    const [closeOrderModal, setCloseOrderModal] = useState(false)

 return (
    <>
        {closeOrderModal && <CloseOrderModal 
            setOrders={setOrders} 
            setCloseOrderModal={setCloseOrderModal}
            orderID={order.order_id}
        />}
        <p>Order = {order.order_id}</p>

        <Button 
            innerText={"Закрыть заказ"} 
            clickEvent={setCloseOrderModal}
            value={true} 
        />
    </>
 )
}

export default Order