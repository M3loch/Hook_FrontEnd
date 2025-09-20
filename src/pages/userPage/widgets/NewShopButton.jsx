import { useContext } from "react"
import Button from "../../../shared/Button"
import { Context } from "../../../App"

function NewShopButton ({shopName, setNewShopModal}) {
    const { user } = useContext(Context)


    return(
        <Button 
        innerText={'Создать новое заведение'} 
        clickEvent={ async  (shopName) => {
            const restrictedNames = ['', ' ', '-', '_']
            if (restrictedNames.includes(shopName)){
                console.error(shopName, ' is restricted')
                return
            } 
            const response = await user.createShop(shopName)
            response 
                ? setNewShopModal(false)
                : null
        }}
        value={shopName} />
    ) 
    

}

export default NewShopButton