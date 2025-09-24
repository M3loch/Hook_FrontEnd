import { useContext, useState } from "react"
import Input from "../../../shared/Input"
import Select from "../../../shared/Select"
import CheckBox from "../../../shared/CheckBox"
import { Context } from "../../../App"
import Button from "../../../shared/Button"

function CreateOrderModal ({setOrders, setCreateOrderModal}){

    const { shop } = useContext(Context)

    const [tableID, setTableID] = useState(null)
    const [discountID, setDiscountID] = useState(null)
    const [categoryID, setCategoryID] = useState(null)
    const [strength, setStrength] = useState(0)
    const [flavoures, setFlavoures] = useState([])
    const [isPaid, setIsPaid] = useState(false)
    const [comment, setComment] = useState('')
    const [, ] = useState()
    const [, ] = useState()

    async function createOrder(){
        const newOrders = await shop.createOrder({tableID, discountID, categoryID, strength, flavoures, isPaid, comment})
        setOrders(newOrders)
        setCreateOrderModal(false)
    }

    return (
        <>
            <Select 
                selectorName={'Стол'} 
                options={shop.tables} 
                setOption={setTableID} 
                byIndex={true}
            />

            <Select 
                selectorName={'Акция'} 
                options={shop.discounts} 
                setOption={setDiscountID} 
                byIndex={true}
            />

            <Select 
                selectorName={'Катергори'} 
                options={shop.categories} 
                setOption={setCategoryID} 
                byIndex={true}
            />

            <CheckBox 
                value={isPaid} 
                onChange={setIsPaid}
            />

            <Input 
                type="number"
                max={10}
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
                innerText={"+"}
            />
        </>
    )
}

export default CreateOrderModal