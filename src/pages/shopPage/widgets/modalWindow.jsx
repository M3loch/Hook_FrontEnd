import { useContext, useState } from "react"
import Button from "../../../shared/Button"
import Input from "../../../shared/Input"
import { Context } from "../../../App"
import Select from "../../../shared/Select"
import OrderService from "../../../services/orderService/orderService"
import CheckBox from "../../../shared/CheckBox"

function ModalWindow({setCreateModal, setOrders}){
    const {shop, user} = useContext(Context)
    function closeModal(){
        setCreateModal(false)
    }

    async function newOrder(){
        const orders = await OrderService.createOrder(
            {
                userID : user.userID, 
                shopID: shop.shopID,
                tableID : table,
                discountIDs : discounts,
                categoryIDs : category,
                strength: Number(strength),
                flavoures: [],
                isPaid: isPaid,
                comment: comment,

            }
        )
        setOrders(orders)
        setModal(false)
    }


    const [table, setTable] = useState(null)
    const [category, setCategory] = useState(null)
    const [discounts, setDisсounts] = useState(null)
    const [isPaid, setIsPaid] = useState(false)
    const [flavoures, setFlavoures] = useState([])
    const [strength, setStrength] = useState(0)
    const [comment, setComment] = useState('')


    return (
        <>
            <div className="modalBG">
                <div className="modalWindow">
                    <div className="modalHeader">
                        <p>Создать новый таймер</p>
                        <Button className="closeModal" clickEvent={closeModal} innerText={'x'}/>
                    </div>
                    <div className="modalMain">
                        <li>
                            <ul><Select selectorName={"Стол"} options={shop.tables} setOption={setTable} value={table} byIndex={true} /></ul>
                            <ul><Input className="strengthInput" type="number" placeholder="крепость" onChange={setStrength} value={strength} max={10} maxCallback={()=>{alert('Максимальная крепость - 10 единиц'); setStrength(10)}}/> / 10 </ul>
                            <ul><Select selectorName={"Категория"} options={shop.categories} setOption={setCategory} value={category} byIndex={true} /></ul>
                            <ul><Select selectorName={"Акции"} options={shop.discounts} setOption={setDisсounts} value={discounts} byIndex={true} /></ul>
                            <ul><CheckBox innerText={'Оплачен?'} value={isPaid} onChange={setIsPaid} /> </ul>
                            <ul><Select selectorName={"Вкусы"} options={["тестовые","вкусы","для","проверки",]} setOption={setFlavoures}/></ul>
                            <ul><Input className="comment" placeholder="комментарий" onChange={setComment} value={comment} /></ul>
                        </li>
                        <Button className="newOrderButton" clickEvent={newOrder} innerText={'Создать заказ'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalWindow