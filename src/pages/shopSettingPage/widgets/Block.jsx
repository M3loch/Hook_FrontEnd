import Button from "../../../shared/Button"
import Item from "../shared/Item"
import { useContext, useState } from "react"
import NewItemForm from "./NewItemForm"
import { Context } from "../../../App"

import cross from '../../../assets/cross.svg'

import '../styles/block.css'

function Block({list, itemName, settingName, category}) {
    const {shop, user} = useContext(Context)
    const [newItemModal, setNewItemModal] = useState(false)
    const [targetList, setTargetList] = useState(list)

    async function deleteItem(item){
        const currentList = shop[`${settingName}`].data
        const newList = []
        for (let i of currentList){
            i != item && newList.push(i)
        }

        const updateRequest = {}
        updateRequest[`${settingName}`] = newList

        const shopInfo = await shop.updateShop(user.accessToken, updateRequest )
        setTargetList(shopInfo[`${settingName}`].data)
    }

    return (
        <div className="block">
            <p className="block-setting-container">
                {category}:
            </p>
            <div className="block-values">

            {targetList[0] !== undefined 
                ? targetList.map((item) => {
                    return (
                        <div key={crypto.randomUUID()} className="block-value">
                            <Item  itemName={itemName} itemValue={item} /> <Button innerText={<img className="cross" src={cross} />} clickEvent={deleteItem} value={item}/>
                        </div>
                )})
                : <div key={crypto.randomUUID()} className="block-value">N/a</div> 
            }
        </div>

            <div className="block-controls" >
            {
                newItemModal && <NewItemForm 
                setNewItemModal={setNewItemModal} 
                settingName={settingName}
                setTargetList={setTargetList}
                />
            }
                <Button innerText={"Добавить"} clickEvent={setNewItemModal} value={true}/>
            </div>
        </div>
    ) 

}

export default Block