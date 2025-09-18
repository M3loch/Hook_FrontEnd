import { useContext } from "react"
import { Context } from "../../../App"
import AcceptButton from "../shared/AcceptButton"
import Input from "../shared/input"

function LogInForm({ setIsExist, pass, setPass, phoneNumber, setPhoneNumber}) {

    
    let { user } = useContext(Context)

    function passSetter(value){
        setPass(value)
    }
    
    function phoneSetter(value){
        setPhoneNumber(value)
    }   

    async function logIn([phoneNumber, pass]){
        setIsExist( await user.logIn(phoneNumber, pass) )
    }


    return (
        <>
            < Input 
                placeholder={'Номер телефона'} 
                onChange={phoneSetter} 
                vaule={phoneNumber}
                type="Text"
            />
            < Input 
                placeholder={'Пароль'} 
                onChange={passSetter} 
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