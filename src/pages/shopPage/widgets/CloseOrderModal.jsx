import { useContext } from "react"
import Button from "../../../shared/Button"
import { Context } from "../../../App"


function CloseOrderModal({setOrders, setCloseOrderModal, orderID}) {

    const {shop} = useContext(Context)


    async function closeOrder(closeStatus){
        const newOrders = await shop.closeOrder(orderID, closeStatus)
        setOrders(newOrders)
        setCloseOrderModal(false)
    }

    return (
        <>
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