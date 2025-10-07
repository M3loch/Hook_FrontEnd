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
        <div className="pop-up">

            <p>Перевести заказ на следующую стадию?</p>
            <Button 
                innerText={"Да"}
                clickEvent={nextStage}
            />

            <Button 
                innerText={"Нет"}
                clickEvent={setNextStageModal}
                className={'hollow-button'}
                value={false}
            />
        </div>
    )
}

export default NextStageModal