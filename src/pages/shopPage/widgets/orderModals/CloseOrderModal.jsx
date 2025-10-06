import { useContext } from "react"
import Button from "../../../../shared/Button"
import { Context } from "../../../../App"


function CloseOrderModal({setCloseOrderModal, order}) {

    const {shop, orders} = useContext(Context)


    async function closeOrder(closeStatus){
        const newOrders = await shop.closeOrder(order.orderID, closeStatus)
        orders.updateList(newOrders)
    }

    return (
        <>
        <p>Закрыть заказ?</p>
            <Button 
                innerText={"Перезабив"}
                clickEvent={closeOrder}
                value={2}
            />

            <Button 
                innerText={"Закрыть"}
                clickEvent={closeOrder}
                value={1}
            />
        </>
    )
}

export default CloseOrderModal