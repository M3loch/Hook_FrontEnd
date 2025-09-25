import { useContext } from "react"
import Button from "../../../shared/Button"
import { Context } from "../../../App"


function LogOutModal({setLogOutModal}){

    const {user} = useContext(Context)

    function Logout(){
        setLogOutModal(false)
        user.logOut()
    }

return (
    <>
    Are You Sure?

    <Button innerText={"Выйти"} clickEvent={Logout} />
    <Button  innerText={"Отмена"} clickEvent={setLogOutModal} value={false}/>
    </>
)
}

export default LogOutModal