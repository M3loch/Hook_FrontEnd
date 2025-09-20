import { useContext, useState } from "react"
import { Context } from "../../App"
import ShopCard from "./widgets/ShopCard"
import Button from "../../shared/Button"
import NewShopModal from "./widgets/NewShopModal"

function UserPage() {
    const { user, shop } = useContext(Context)

    const [newShopModal, setNewShopModal] = useState(false)
    const shops = user.shops
    shop.user = user.userID


    return (
        !newShopModal
            ?
                <>
                    <p> hello {user.firstName} </p>
                    <p> here's your shops: </p>
                        
                    {shops.map((shop) => {return <ShopCard key={shop.shop_id} shopName={shop.shop_name} shopID={shop.shop_id}/> })}

                    <Button innerText={'Создать новое заведение'} clickEvent={setNewShopModal} value={true} />
                </>
            : <NewShopModal setNewShopModal={setNewShopModal}/>

    )
}

export default UserPage