import { useContext, useState } from "react"
import { Context } from "../../../App"
import Field from "../../../shared/Field"

import '../styles/userInfo.css'


function UserInfo(){

    const { user } = useContext(Context)

    const [firstName, setFirstName] = useState(user.firstName)
    const [familyName, setFamilyName] = useState(user.familyName)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)

    return (
        <div className="user-setting-table">
        <div className="table-header-grey"> Персональные данные</div>
        <div className="setting-container">
            <p>Имя:</p>
            <Field 
                value={firstName}
                setValue={setFirstName}
                placeholder={"Имя"}
                innerText={"Сохранить"}
                callBack={() => user.updateUser({first_name: firstName})}
            />
        </div>
        <div className="setting-container">
            <p>Фамилия:</p>
            <Field 
                value={familyName}
                setValue={setFamilyName}
                placeholder={"Фамилия"}
                innerText={"Сохранить"}
                callBack={() => user.updateUser({family_name: familyName})}
            />
        </div>
        <div className="setting-container">
            <p>Номер телефона:</p>
            <Field 
            value={phoneNumber}
            setValue={setPhoneNumber}
            placeholder={"Телефон"}
            innerText={"Сохранить"}
            callBack={() => user.updateUser({phone_number: phoneNumber})}
        />
        </div>
        </div>
    )
}

export default UserInfo