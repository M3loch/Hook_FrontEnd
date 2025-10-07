import { useState } from "react"
import Button from "../../shared/Button"
import ChangePassModal from "./widgets/ChangePassModal"
import LogOutModal from "./widgets/LogOutModal"
import UserInfo from "./widgets/UserInfo"

import './styles/userPage.css'


function UserSettingPage(){

    const [changePassModal, setChangePassModal] = useState(false)
    const [logOutModal, setLogOutModal] = useState(false)

    

return (
    <>
        {changePassModal && <ChangePassModal setChangePassModal={setChangePassModal} />}
        {logOutModal && <LogOutModal setLogOutModal={setLogOutModal}/>}
        <UserInfo />
        <div className="controls">
            <Button 
                innerText={"Сменить Пароль"} 
                clickEvent={setChangePassModal} 
                value={true} 
            />
            <Button 
                innerText={"Выйти"} 
                clickEvent={setLogOutModal} 
                value={true} 
                className={'hollow-button'}
            />
        </div>
    </>
)
}

export default UserSettingPage