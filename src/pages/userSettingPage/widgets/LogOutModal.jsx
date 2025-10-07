import { useContext } from "react"
import Button from "../../../shared/Button"
import { Context } from "../../../App"


function LogOutModal({setLogOutModal}){

    const {user, shop, orders} = useContext(Context)

    function Logout(){
        setLogOutModal(false)
        user.logOut()
        shop.exit()
        orders.stop()
    }

return (
    <div className="modal-bg">
        <div className="modal">
            Выйти?
            <Button 
                innerText={"Выйти"} 
                clickEvent={Logout} 
                className={'hollow-button'}
            />
            <Button  
                innerText={"Отмена"} 
                clickEvent={setLogOutModal} 
                value={false}
            />
            </div>
    </div>
)
}

export default LogOutModal