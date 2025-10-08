import { useContext, useState } from "react"
import {Context} from "../../../App"
import roleBuilder from "../../../entities/role"
import Input from "../../../shared/Input"
import Button from "../../../shared/Button"
import CheckBox from "../../../shared/CheckBox"
import VisEditForm from "../shared/VisEditForm"

import '../styles/roleBuilder.css'

const newRole = new roleBuilder
function RoleBuilderModal({setRoleList, setRoleBuilderModal}){

    const {shop, user} = useContext(Context)

    async function CreateNewRole(){
        newRole.isActive = true
        const currentRoles = shop.roles.data
        const newRoleModel = newRole.modelDump()
        currentRoles[newRoleModel.role_name] = newRoleModel
        const newShopInfo = await shop.updateShop(user.accessToken, {roles : currentRoles})
        const roles = []

        for (const role in newShopInfo.roles.data){
            roles.push(newShopInfo.roles.data[role])
        }   
        setRoleList(roles)

        setRoleBuilderModal(false)
    }


    const [step, setStep] = useState(0)
    function nextStep(){
        setStep(prev => prev + 1)
    }
    function prevStep(){
        setStep(prev => prev - 1)
    }

    const [roleName, setRoleName] = useState('')

    const [ordersPage, setOrderPage] = useState(false)
    const [settingPage, setSettingPage] = useState(false)
    
    const [rolesVis, setRolesVis] = useState(false)
    const [rolesEdit, setRolesEdit] = useState(false)
    const [shopNameEdit, setShopNameEdit] = useState(false)
    const [stagesVis, setStagesVis] = useState(false)
    const [stagesEdit, setStagesEdit] = useState(false)
    const [discountVis, setDiscountVis] = useState(false)
    const [discountEdit, setDiscountEdit] = useState(false)
    const [tablesVis, setTablesVis] = useState(false)
    const [tablesEdit, setTableEdit] = useState(false)
    const [categoryVis, setCategoryVis] = useState(false)
    const [categoryEdit, setCategoryEdit] = useState(false)
    const [employyesVis, setEmployeesVis] = useState(false)
    const [employyesEdit, setEmployeesEdit] = useState(false)
    
    const [visBypass, setVisBypass] = useState(false)
    const [editBypass, setEditBypass] = useState(false)

    function MultiStepModal(){
        switch(step){
            case 0:
                return (
                    <>
                        <p className="master-setting-name">
                            Введите название новой роли:
                        </p>
                        <Input 
                            placeholder={"Название роли"}
                            onChange={setRoleName}
                            value={roleName}
                        />
                        <Button 
                            innerText={"Далее"}
                            clickEvent={(roleName)=>{
                                nextStep()
                                newRole.roleName = roleName; 
                            }}
                            value={roleName}
                        />
                    </>
                );
            case 1: 
                return(
                    <>
                        <p className="master-setting-name">
                            Выберите доступные для просмотра страницы:
                        </p>
                        <CheckBox 
                            onChange={setOrderPage}
                            value={ordersPage}
                            label={'Заказы'}
                        />
                        <CheckBox 
                            onChange={setSettingPage}
                            value={settingPage}
                            label={'Настройки'}
                        />
                        
                        <Button 
                            innerText={"Далее"}
                            clickEvent={()=>{
                                newRole.orderPageVisibility = ordersPage
                                newRole.settingPageVisibility = settingPage
                                nextStep()
                            }}
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
            case 2:
                return(
                    <>
                        <p className="master-setting-name">
                            Выберите доступные для просмотра и изменения  настройки:<br/>
                        </p>
                            <CheckBox 
                                label={'Изменение названия заведения'}
                                onChange={setShopNameEdit}
                                value={shopNameEdit} 
                            />
                        <br/>

                        <VisEditForm 
                            setting={"Роли"}
                            vis={rolesVis}
                            edit={rolesEdit}
                            setEdit={setRolesEdit}
                            setVis={setRolesVis}
                        />

                        <VisEditForm 
                            setting={"Стадии"}
                            vis={stagesVis}
                            edit={stagesEdit}
                            setVis={setStagesVis}
                            setEdit={setStagesEdit}
                        />

                        <VisEditForm 
                            setting={"Акции"}
                            vis={discountVis}
                            edit={discountEdit}
                            setVis={setDiscountVis}
                            setEdit={setDiscountEdit}
                        />

                        <VisEditForm 
                            setting={"Столы"}
                            vis={tablesVis}
                            edit={tablesEdit}
                            setVis={setTablesVis}
                            setEdit={setTableEdit}
                        />
                        
                        <VisEditForm 
                            setting={"Категории"}
                            vis={categoryVis}
                            edit={categoryEdit}
                            setVis={setCategoryVis}
                            setEdit={setCategoryEdit}
                        />
                        
                        <VisEditForm 
                            setting={"Сотрудники"}
                            vis={employyesVis}
                            edit={employyesEdit}
                            setVis={setEmployeesVis}
                            setEdit={setEmployeesEdit}
                        />

                        <Button 
                            innerText={"Далее"}
                            clickEvent={()=>{
                                newRole.setSetting("shopName", true, shopNameEdit)
                                newRole.setSetting("roles", rolesVis, rolesEdit)
                                newRole.setSetting("stages", stagesVis, stagesEdit)
                                newRole.setSetting("discounts", discountVis, discountEdit)
                                newRole.setSetting("tables", tablesVis, tablesEdit)
                                newRole.setSetting("categories", categoryVis, categoryEdit)
                                newRole.setSetting("employees", employyesVis, employyesEdit)
                                nextStep()

                            }}
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
            case 3:
                return(
                    <>
                        <VisEditForm 
                            setting={"Разрешить просмотр и/или изменение всех стадий заказа?"}
                            vis={visBypass}
                            edit={editBypass}
                            setVis={setVisBypass}
                            setEdit={setEditBypass}
                        />
                        <Button 
                            innerText={"Сохранить"}
                            clickEvent={() => {
                                newRole.setOrderBypass(visBypass,  editBypass)
                                CreateNewRole()
                            }}
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
            default: null
            

        }
    }
    return (
        <div className="modal-bg">
            <div className="modal-master">
                {MultiStepModal()}
                <Button 
                    clickEvent={setRoleBuilderModal}
                    value={false}
                    innerText={'Отмена'}
                    className={'hollow-button'}
                />
            </div>
        </div>
    )    
}

export default RoleBuilderModal