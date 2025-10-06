import { useContext, useState } from "react"
import Input from "../../../../shared/Input"
import Select from "../../../../shared/Select"
import CheckBox from "../../../../shared/CheckBox"
import { Context } from "../../../../App"
import Button from "../../../../shared/Button"

import '../../styles/createOrderModal.css'

function CreateOrderModal ({setCreateOrderModal}){

    const { shop, orders } = useContext(Context)

    const [tableID, setTableID] = useState(null)
    const [discountID, setDiscountID] = useState(null)
    const [categoryID, setCategoryID] = useState(null)
    const [strength, setStrength] = useState(0)
    const [flavoures, setFlavoures] = useState([])
    const [isPaid, setIsPaid] = useState(false)
    const [comment, setComment] = useState('')

    async function createOrder(){
        const newOrders = await shop.createOrder({tableID, discountID, categoryID, strength, flavoures, isPaid, comment})
        orders.updateList(newOrders, shop)
        setCreateOrderModal(false)  
    }

    return (
        <div className="modal-bg">
            <div className="modal">
                <Select 
                    selectorName={'Стол'} 
                    options={shop.tables.data} 
                    setOption={setTableID} 
                    byIndex={true}
                    />

                <Select 
                    selectorName={'Акция'} 
                    options={shop.discounts.data} 
                    setOption={setDiscountID} 
                    byIndex={true}
                />

                <Select 
                    selectorName={'Катергори'} 
                    options={shop.categories.data} 
                    setOption={setCategoryID} 
                    byIndex={true}
                />

                <CheckBox 
                    value={isPaid} 
                    onChange={setIsPaid}
                    label={'Оплачен?'}
                />

                <Input 
                    type="number"
                    max={10}
                    min={0}
                    value={strength}
                    onChange={setStrength}
                />

                <Input 
                placeholder={'Комментарий'}
                value={comment}
                onChange={setComment}
                />

                <Button 
                    clickEvent={createOrder}
                    innerText={"Создать заказ"}
                    />
                <Button 
                    clickEvent={setCreateOrderModal}
                    value={false}
                    innerText={"Отмена"}
                    className={'hollow-button'}
                />
            </div>
        </div>
    )
}

export default CreateOrderModal