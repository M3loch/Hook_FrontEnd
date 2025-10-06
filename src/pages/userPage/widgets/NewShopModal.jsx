import NewShopButton from "./NewShopButton"
import Button from "../../../shared/Button"
import { useState } from "react"
import Input from "../../../shared/Input"

import '../styles/newShopModal.css'

function NewShopModal({setNewShopModal}){

    const [shopName, setShopName] = useState('')
    return(
        <div className="modal-bg">
            <div className="modal">
                <Input placeholder="название заведения" type="text" onChange={setShopName} value={shopName}/>
                <div className="button-box" >
                    <Button innerText={'Отмена'} clickEvent={setNewShopModal} value={false}/>
                    <NewShopButton shopName={shopName} setNewShopModal={setNewShopModal}/>
                </div>
            </div>
        </div>
    )
}
export default NewShopModal