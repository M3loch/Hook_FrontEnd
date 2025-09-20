import NewShopButton from "./NewShopButton"
import Button from "../../../shared/Button"
import { useState } from "react"
import Input from "../../../shared/Input"
function NewShopModal({setNewShopModal}){

    const [shopName, setShopName] = useState('')
    return(
        <>
            <Input placeholder="название заведения" type="text" onChange={setShopName} value={shopName}/>
            <NewShopButton shopName={shopName} setNewShopModal={setNewShopModal}/>
            <Button innerText={'Отмена'} clickEvent={setNewShopModal} value={false}/>
        </>
    )
}
export default NewShopModal