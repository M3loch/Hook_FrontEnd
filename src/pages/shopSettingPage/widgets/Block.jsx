import Button from "../../../shared/Button"
import Item from "../shared/Item"
import { useContext, useState } from "react"
import NewItemForm from "./NewItemForm"
import { Context } from "../../../App"

function Block({list, itemName, settingName, category}) {
    const {shop, user} = useContext(Context)
    const [newItemModal, setNewItemModal] = useState(false)
    const [targetList, setTargetList] = useState(list)

    async function deleteItem(item){
        const newList = shop[`${settingName}`].data
        newList.pop(item)
        const updateRequest = {}
        updateRequest[`${settingName}`] = newList

        const shopInfo = await shop.updateShop(user.accessToken, updateRequest )
        setTargetList(shopInfo[`${settingName}`].data)
    }

    return (
        <>
            {category}:
            {targetList.map((item) => {
                return (
                    <div key={crypto.randomUUID()}>
                        <Item itemName={itemName} itemValue={item} /> <Button innerText={"X"} clickEvent={deleteItem} value={item}/>
                    </div>
                )})}
            {
            newItemModal && <NewItemForm 
                setNewItemModal={setNewItemModal} 
                settingName={settingName}
                setTargetList={setTargetList}
            />
            }
            <Button innerText={"Добавить"} clickEvent={setNewItemModal} value={true}/>
        </>
    ) 

}

export default Block