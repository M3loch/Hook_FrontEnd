import { useContext } from "react";
import Button from "../../../shared/Button";
import { Context } from "../../../App";
import OrderService from "../../../services/orderService/orderService";

function Order({orderID, setOrders}){

    const { shop, user } = useContext(Context)
    
    async function closeOrder({orderID, closeStatus, userID, shopID}){
        const orders = await OrderService.closeOrder(orderID, closeStatus, userID, shopID)
        setOrders(orders)
    }


    return(
        <div>
            orderID = {orderID}
            <Button innerText={'Закрыть заказ'} clickEvent={closeOrder} value={{orderID:orderID, closeStatus: 1, userID: user.userID, shopID: shop.shopID }}/>
        </div>
    )

}

export default Order