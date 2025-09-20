import { useContext } from "react"
import { Context } from "../../../App"
import AcceptButton from "../shared/AcceptButton"
import Input from "../../../shared/Input"

function LogInForm({ setIsExist, pass, setPass, phoneNumber, setPhoneNumber}) {

    
    const { user } = useContext(Context)

    async function logIn([phoneNumber, pass]){
        setIsExist( await user.logIn(phoneNumber, pass) )
    }


    return (
        <>
            < Input 
                placeholder={'Номер телефона'} 
                onChange={setPhoneNumber} 
                value={phoneNumber}
                type="Text"
            />
            < Input 
                placeholder={'Пароль'} 
                onChange={setPass} 
                vaule={pass}
                type="Password"
            />
            < AcceptButton 
                clickEvent={logIn} 
                value={[phoneNumber, pass]}
                innerText='V'
            />
        </>
    )
}

export default LogInForm