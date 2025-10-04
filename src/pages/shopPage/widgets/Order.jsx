import { useState, useContext, useEffect } from "react"
import Button from "../../../shared/Button"
import CloseOrderModal from "./CloseOrderModal"
import { Context } from "../../../App"


function Order({order}){

    const [closeOrderModal, setCloseOrderModal] = useState(false)
    const { shop } = useContext(Context)

 return (
    <div className="order">
        {closeOrderModal && <CloseOrderModal 
            setOrders={setOrders} 
            setCloseOrderModal={setCloseOrderModal}
            orderID={order.order_id}
        />
        }
        <div className="orderHeader">
            <div className="stageName">
                {order.stage}
            </div>
            <Button 
                className="closeOrderButton"
                innerText={"X"} 
                clickEvent={setCloseOrderModal}
                value={true} 
            />
        </div>
        <div className="timer">
            {order.timeInterface}
        </div>

    </div>
 )
}

export default Order