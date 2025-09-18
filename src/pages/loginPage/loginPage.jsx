import { useState } from 'react'

import IsExistForm from './widgets/isExistForm'
import LogInForm from './widgets/logInForm'
import RegForm from './widgets/regForm'

function LoginPage ( ) {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [isExist, setIsExist] = useState(null)
    const [pass, setPass] = useState('')

    const [isRegistred, setIsRegistred] = useState(true)

            
        
        return(
            <>
                {
                    isRegistred
                        ? !isExist
                            ?
                            <IsExistForm
                                isExist={isExist}
                                setIsExist={setIsExist} 
                                setPhoneNumber={setPhoneNumber} 
                                phoneNumber={phoneNumber}
                                
                                setIsRegistred={setIsRegistred}
                            />
                        : 
                            <LogInForm 
                                setIsExist={setIsExist}
                                pass={pass}
                                setPass={setPass}
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber} 
                            />
                        : 
                            <RegForm 
                                phoneNumber={phoneNumber} 
                                setPhoneNumber={setPhoneNumber}/>
                                
                }
            </>


)

}

export default LoginPage