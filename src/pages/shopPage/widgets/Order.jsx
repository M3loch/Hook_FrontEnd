import { useState, useContext } from "react"
import Button from "../../../shared/Button"
import CloseOrderModal from "./orderModals/CloseOrderModal"
import NextStageModal from "./orderModals/NextStageModal"
import Field from "../../../shared/Field"
import { Context } from "../../../App"
import SelectField from "../../../shared/SelectField"
import CheckboxField from "../../../shared/CheckboxField"

import '../styles/order.css'

import cross from '../../../assets/cross.svg'
import arrow from '../../../assets/arrow.svg'
import TimeOver from "./timeOver"


function Order({order}){

    const { user, shop } = useContext(Context)

    const [closeOrderModal, setCloseOrderModal] = useState(false)
    const [nextStageModal, setNextStageModal] = useState(false)

    const [nextStageButtonInnerText, setNextStageButtonInnerText] = useState(order.isLastStage() ? 'Закрыть заказ' : 'Следующая стадия')

    const [comment, setComment] = useState(order.comment)
    const [discount, setDiscount] = useState(order.discount)
    const [table, setTable] = useState(order.table)
    const [category, setCategory] = useState(order.category)
    const [isPaid, setIsPaid] = useState(order.isPaid)
    const [strength, setStrength] = useState(order.strength)

    const [compressed, setCompressed] = useState(true)

 return (
    <div className={"order"}>
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
        <div className="order-header">
            <div className="stage-name">
                {order.stage}
            </div>
            <Button 
                className="closeOrderButton"
                innerText={<img src={cross} />} 
                clickEvent={setCloseOrderModal}
                value={true} 
            />
        </div>
        <div className="timer">
            {order.timeInterface}
        </div>
        <div className="control">
            <Button 
                className={"change-stage-button"}
                innerText={nextStageButtonInnerText}
                clickEvent={setNextStageModal}
                value={true}
            />
            <Button 
                className={'compress-button'}
                innerText={<img src={arrow} className={compressed ? "arrow-down" : 'arrow-up'}/>}
                clickEvent={setCompressed}
                value={!compressed}

            />
        </div>
        {
            compressed
                ?
                    null
                :
                    <div className="order-info">
                        <div className="setting-container">
                            <p>Категория</p>
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
                        <div className="setting-container">
                            <p>Стол</p>
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
                        <div className="setting-container">
                            <p>Акция</p>
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
                        <div className="setting-container">
                            <p>Оплачен</p>
                                <CheckboxField
                                    value={isPaid}
                                    setValue={setIsPaid}
                                    callBack={()=>{order.updateOrder(user.userID, {is_paid: isPaid})}}
                                    innerText={"Обновить"}
                                    />
                        </div>
                        <div className="setting-container">
                            <p>Крепость</p>
                                <Field 
                                    value={strength}
                                    setValue={setStrength}
                                    max={10}
                                    min={0}
                                    type="number"
                                    callBack={() => {order.updateOrder(user.userID, {strength: strength})}}
                                    innerText={'Обновить'}
                                    />
                        </div>
                                <Field 
                                    value={comment}
                                    setValue={setComment}
                                    placeholder={'comment'}
                                    callBack={() => {order.updateOrder(user.userID, {comment: comment})}}
                                    innerText={'Обновить'}
                                    textArea={true}
                                />
                            <div className="time-overs">
                                {
                                    order.timeOversInterface.map((element) => {
                                        return <TimeOver 
                                            key={element.data}
                                            value={element.data}
                                            stage={element.stage}
                                            isPositive={element.isPositive}
                                            />
                                    })
                                }
                            </div>
                        </div>

        }
    </div>
 )
}

export default Order