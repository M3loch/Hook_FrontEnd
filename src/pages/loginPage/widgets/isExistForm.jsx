import AcceptButton from "../shared/AcceptButton"
import Input from "../shared/input"
import ActionButton from "../shared/ActionButton"
import { Context } from "../../../App"
import { useContext } from "react"



function IsExistForm( { isExist, setIsExist, setPhoneNumber, phoneNumber, setIsRegistred} ) {

    const { user } = useContext(Context)

    function phoneSetter(value) {
        setPhoneNumber(value)
    }   

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
                onChange={phoneSetter} 
                vaule={phoneNumber}
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