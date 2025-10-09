

import { useContext, useState } from "react"
import {Context} from "../../../App"
import Button from "../../../shared/Button"
import Input from "../../../shared/Input"
import Select from "../../../shared/Select"


function HireForm({setHireForm, setEmployeeList}){
    const {shop, user} = useContext(Context)

    const roleList = []
    for (const role in shop.roles.data){
        roleList.push(shop.roles.data[role].role_name)
    }   
    console.log(roleList)

    const [step, setStep] = useState(0)
    const [employeeID, setEmployeeID] = useState('')
    const [employeeRole, setEmployeeRole] = useState('')
    const [roles, setRoles] = useState(roleList)

    
    function nextStep(){
        setStep(prev => prev+1)
    }
    function prevStep(){
        setStep(prev => prev-1)
    }

    async function HireEmployee(){

        const newEmployeeList = {}
        for (const employee of shop.employees.data){
            console.log(employee)
            newEmployeeList[employee.employee_id] = employee.employee_role
        }

        newEmployeeList[employeeID] = employeeRole
        
        const newShopInfo = await shop.updateShop(user.accessToken, {employees : newEmployeeList})

        setEmployeeList(newShopInfo.employees.data)
    }

    function MultiStepModal(){
        switch(step){
            case 0:
                return (
                    <>
                        <p className="master-setting-name">
                            Введите название новой стадии:
                        </p>
                        <Input 
                            placeholder={"Введите ID Сотрудника"}
                            onChange={setEmployeeID}
                            value={employeeID}
                        />
                        <Button 
                            innerText={"Далее"}
                            clickEvent={
                                nextStep
                            }
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <p className="master-setting-name">
                            Выберите должность сотрудникаЖ
                        </p>
                        <Select
                            selectorName={"Должность"}
                            options={roles}
                            setOption={setEmployeeRole}
                        />
                        <Button 
                            innerText={"Нанять"}
                            clickEvent={()=>{
                                HireEmployee()
                                setHireForm(false)
                            }
                            }
                        />
                        <Button 
                            innerText={"Назад"}
                            className={'hollow-button'}
                            clickEvent={
                                prevStep
                            }
                        />
                    </>
                    )
        }
    }

    return (
        <div className="modal-bg">
            <div className="modal-master">
                {MultiStepModal()}
                <Button 
                    clickEvent={setHireForm}
                    value={false}
                    innerText={'Отмена'}
                    className={'hollow-button'}
                />
            </div>
        </div>
    )
}


export default HireForm