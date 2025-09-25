import { useContext, useState } from "react"
import { Context } from "../../App"
import Button from "../../shared/Button"
import ChangePassModal from "./widgets/ChangePassModal"
import LogOutModal from "./widgets/LogOutModal"
import UserInfo from "./widgets/UserInfo"


function UserSettingPage(){

    const {user} = useContext(Context)

    const [changePassModal, setChangePassModal] = useState(false)
    const [logOutModal, setLogOutModal] = useState(false)

    

return (
    <>
        {changePassModal && <ChangePassModal setChangePassModal={setChangePassModal} />}
        {logOutModal && <LogOutModal setLogOutModal={setLogOutModal}/>}
        <UserInfo />
        <Button innerText={"Сменить Пароль"} clickEvent={setChangePassModal} value={true} />
        <Button innerText={"Выйти"} clickEvent={setLogOutModal} value={true} />
    </>
)
}

export default UserSettingPage