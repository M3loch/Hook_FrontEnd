import { useState, useContext } from "react"
import Button from "../../../shared/Button"
import CloseOrderModal from "./orderModals/CloseOrderModal"
import NextStageModal from "./orderModals/NextStageModal"
import Field from "../../../shared/Field"
import { Context } from "../../../App"
import SelectField from "../../../shared/SelectField"
import SelectCheckbox from "../../../shared/SelectCheckbox"


function Order({order}){

    const { user, shop } = useContext(Context)

    const [closeOrderModal, setCloseOrderModal] = useState(false)
    const [nextStageModal, setNextStageModal] = useState(false)

    const [nextStageButtonInnerText, setNextStageButtonInnerText] = useState('Следующая стадия')

    const [comment, setComment] = useState(order.comment)
    const [discount, setDiscount] = useState(order.discount)
    const [table, setTable] = useState(order.table)
    const [category, setCategory] = useState(order.category)
    const [isPaid, setIsPaid] = useState(order.isPaid)
    const [strength, setStrength] = useState(order.strength)

 return (
    <div className="order">
        <div className="modals">
            {   closeOrderModal && 
                <CloseOrderModal 
                    setCloseOrderModal={setCloseOrderModal}
                    order={order}
                />
            }
            {
                nextStageModal &&
                <NextStageModal
                    setCloseOrderModal={setCloseOrderModal}
                    setNextStageModal={setNextStageModal}
                    order={order}
                    setNextStageButtonInnerText={setNextStageButtonInnerText}
                />
            }
        </div>
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
        <div className="controls">
            <Button 
                className={"changeStageButton"}
                innerText={nextStageButtonInnerText}
                clickEvent={setNextStageModal}
                value={true}
            />
        </div>
        <div className="orderInfo">
            <div className="category" >
                <SelectField
                    value={category}
                    setValue={setCategory}
                    byIndex={true}
                    innerText={"Обновить"}
                    placeholder={"Категория"}
                    options={shop.categories.data}
                    callBack={() => {order.updateOrder(user.userID, {category_id: category})}}
                />
            </div>
            <div className="table" >
                <SelectField
                    value={table}
                    setValue={setTable}
                    byIndex={true}
                    innerText={"Обновить"}
                    placeholder={"Стол"}
                    options={shop.tables.data}
                    callBack={() => {order.updateOrder(user.userID, {table_id: table})}}
                />
            </div>
            <div className="discount" >
                <SelectField
                    value={discount}
                    setValue={setDiscount}
                    byIndex={true}
                    innerText={"Обновить"}
                    placeholder={"Акция"}
                    options={shop.discounts.data}
                    callBack={() => {order.updateOrder(user.userID, {discount_id: discount})}}
                />
            </div>
            <div className="isPaid" >
                <SelectCheckbox
                    value={isPaid}
                    setValue={setIsPaid}
                    callBack={()=>{order.updateOrder(user.userID, {is_paid: isPaid})}}
                    innerText={"Обновить"}
                />
            </div>
            <div className="comment" >
                <Field 
                    value={comment}
                    setValue={setComment}
                    callBack={() => {order.updateOrder(user.userID, {comment: comment})}}
                    innerText={'Обновить'}
                />
            </div>
            <div className="strength" >
                <Field 
                    value={strength}
                    setValue={setStrength}
                    callBack={() => {order.updateOrder(user.userID, {strength: strength})}}
                    innerText={'Обновить'}
                />
            </div>
        </div>

    </div>
 )
}

export default Order