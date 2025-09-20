import AcceptButton from "../shared/AcceptButton"
import Input from "../../../shared/Input"
import ActionButton from "../shared/ActionButton"
import { Context } from "../../../App"
import { useContext } from "react"



function IsExistForm( { isExist, setIsExist, setPhoneNumber, phoneNumber, setIsRegistred} ) {

    const { user } = useContext(Context)

    async function checkIsExist(phoneNumber){
        const response = await user.isExist(phoneNumber)

        if (response) {
            setIsExist(true)
        } else {
            setIsExist(false)
        }
    }

    return (
        <>
            < Input 
                placeholder={'Номер телефона'} 
                onChange={setPhoneNumber} 
                value={phoneNumber}
                type={"text"}
            />
            < AcceptButton 
                clickEvent={checkIsExist} 
                value={phoneNumber}
                innerText='V'
            />
            { 
            isExist == false
                ? <ActionButton innerText='Регистрация' clickEvent={setIsRegistred} value={false}  />
                : null
            }
        </>
    )
}
export default IsExistForm