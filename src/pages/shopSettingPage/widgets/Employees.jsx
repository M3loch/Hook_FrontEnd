import Button from "../../../shared/Button"
import { useState } from "react"

import '../styles/roles.css'
import EmployeeCard from "./EmployeeCard"
import HireForm from "./HireForm"

import '../styles/employee.css'

function Employees({employees}){

    const [hireForm, setHireForm] = useState(false)

    const [employeeList, setEmployeeList] = useState(employees.data)

    return(
        <div className="employee-table">
            <div className="block">
                {hireForm && <HireForm 
                    setEmployeeList={setEmployeeList} 
                    setHireForm={setHireForm}
                />}

                <div className="block-label employee-block-label">
                    <p>
                        Сотрудники:
                    </p>
                </div>

                <div className="block-values employee-block-values">
                    {employeeList.map((employee) => {return (
                        <EmployeeCard 
                        key={employee.employee_id} 
                        employee={employee}
                        setEmployeeList={setEmployeeList}
                        />
                        
                    )})}
                </div>

                <div className="block-controls">
                    <Button 
                        innerText={"Нанять сотрудника"}
                        clickEvent={setHireForm}
                        value={true}
                        />
                </div>

            </div>
        </div>
    )
}

export default Employees