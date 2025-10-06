import { useContext, useState } from "react";
import { Context } from "../../../App";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";


function ChangePassModal({setChangePassModal}) {

    const { user } = useContext(Context)

    async function accessConfirmation(){
        const isConfirmed = await user.confirmPass(oldPass)
        setAccessConfirmed(isConfirmed)
    }

    async function changePass() {
        passConfirmed 
            ?  
                user.updateUser({password: newPass})
            :
                null
        setChangePassModal(false)
    }

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmNewPass, setConfirmNewPass] = useState('')

    const [passConfirmed, setPassConfirmed] = useState(false)
    
    const [accessConfirmed, setAccessConfirmed] = useState(false)

    return (
        <>
            {
                !accessConfirmed && 
                    <>
                        <Input placeholder={"Старый пароль"} onChange={setOldPass} value={oldPass}/>
                        <Button clickEvent={accessConfirmation} innerText={"Подтвердить"}/>
                    </>
            }

            {
                accessConfirmed && 
                    <>
                        <Input 
                            placeholder={"Новый пароль"} 
                            type={"password"} 
                            onChange={setNewPass} 
                            value={newPass}
                        />
                        <Input 
                            placeholder={"Повторите новый пароль"} 
                            type={"password"} 
                            onChange={setConfirmNewPass} 
                            value={confirmNewPass} 
                            sideEffect={(value) => setPassConfirmed(newPass === value)}
                        />

                        {
                            !passConfirmed && <p>Пароль не совпадает</p>
                        }

                        <Button 
                            clickEvent={changePass} 
                            innerText={"Сменить Пароль"}
                        />
                    </>
            }
        </>
    )
}

export default ChangePassModal