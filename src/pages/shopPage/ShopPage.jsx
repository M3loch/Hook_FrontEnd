import { useContext, useState } from "react"
import { Context } from "../../App"
import { toJS } from "mobx"
import OrderWindow from "./widgets/orderWindow"
import ModalWindow from "./widgets/modalWindow"


function ShopPage({blank = false}){

    const {shop} = useContext(Context)

    if (blank) {
        return <p>Not Chosen</p>
    }

    return (
        <>
        <OrderWindow />
        </>

    )
}

export default ShopPage