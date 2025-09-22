import Button from "../../../shared/Button"

function OrderCloseModal({setOrderCloseModal, setCloseStatus}){
    function Callback(status){
        setCloseStatus(status)
        setOrderCloseModal(false)
    }

    return (
        <div>
            <Button innerText={"Перезабив"}  clickEvent={Callback} value={1} />
            <Button innerText={"Закрыть"}  clickEvent={Callback} value={1} />
        </div>
    )
}

export default OrderCloseModal