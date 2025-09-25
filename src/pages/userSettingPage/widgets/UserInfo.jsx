import { useContext, useState } from "react"
import { Context } from "../../../App"
import Field from "../shared/Field"


function UserInfo(){

    const { user } = useContext(Context)

    const [firstName, setFirstName] = useState(user.firstName)
    const [familyName, setFamilyName] = useState(user.familyName)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)

    return (
        <>
            <Field 
                value={firstName}
                setValue={setFirstName}
                placeholder={"Имя"}
                innerText={"Сохранить"}
                callBack={() => user.updateUser({first_name: firstName})}
            />
            <Field 
                value={familyName}
                setValue={setFamilyName}
                placeholder={"Фамилия"}
                innerText={"Сохранить"}
                callBack={() => user.updateUser({family_name: familyName})}
            />
            <Field 
            value={phoneNumber}
            setValue={setPhoneNumber}
            placeholder={"Телефон"}
            innerText={"Сохранить"}
            callBack={() => user.updateUser({phone_number: phoneNumber})}
        />
        </>
    )
}

export default UserInfo