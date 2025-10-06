import { useContext } from "react"
import Button from "../../../../shared/Button"
import { Context } from "../../../../App"


function NextStageModal({setCloseOrderModal, setNextStageModal, order, setNextStageButtonInnerText}) {

    const { orders, user } = useContext(Context)
    setCloseOrderModal(false)

    if (order.isLastStage()){
        setCloseOrderModal(true)
        setNextStageModal(false)
    }
    async function nextStage(){
        const newOrders = await order.nextStage(user.userID)
        !newOrders
            ?
                setCloseOrderModal(true)
            :
                orders.updateList(newOrders)

            setNextStageModal(false)

            order.isNextIsLastStage() && setNextStageButtonInnerText("Закрыть заказ")
            }

    return (
        <>

            <p>Перевести заказ на следующую стадию?</p>
            <Button 
                innerText={"Да"}
                clickEvent={nextStage}
            />

            <Button 
                innerText={"Нет"}
                clickEvent={setNextStageModal}
                value={false}
            />
        </>
    )
}

export default NextStageModal