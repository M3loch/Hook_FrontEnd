import { useContext, useState } from "react"
import { Context } from "../../../App"
import Field from "../../../shared/Field"

import '../styles/userInfo.css'
import CopyText from "../../../shared/copyText"


function UserInfo(){

    const { user, shop } = useContext(Context)

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
                    callBack={async() => {
                        await user.updateUser({first_name: firstName})
                        await shop.refresh()
                    }}
                />
            </div>
            <div className="setting-container">
                <p>Фамилия:</p>
                <Field 
                    value={familyName}
                    setValue={setFamilyName}
                    placeholder={"Фамилия"}
                    innerText={"Сохранить"}
                    callBack={async() => {
                        await user.updateUser({family_name: familyName})
                        await shop.refresh()
                }}
                />
            </div>
            <div className="setting-container">
                <p>Номер телефона:</p>
                <Field 
                value={phoneNumber}
                setValue={setPhoneNumber}
                placeholder={"Телефон"}
                innerText={"Сохранить"}
                callBack={async () => {
                    await user.updateUser({phone_number: phoneNumber})
                    await shop.refresh()
                }}
            />
            </div>
            <div className="setting-container">
                <p>ID</p>
                <div 
                    className="field"
                >
                    <CopyText 
                        value={user.userID}
                        className={'value-container'}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserInfo