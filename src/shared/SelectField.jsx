import { useState } from "react"
import Button from "./Button"
import Select from "./Select"


function SelectField({
    value, 
    setValue, 
    callBack, 
    placeholder, 
    innerText, 
    byIndex = false,  
    options
    }){
    
    const [editMode, setEditMode] = useState(false)

    function wrapper(){
        callBack()
        setEditMode(false)
        byIndex && setValue(options[value])
    }


    return (
        <>
            {
                editMode
                    ?
                        <>
                            <Select
                                selectorName={placeholder}
                                options={options}
                                setOption={setValue}
                                byIndex={byIndex}
                            />
                            <Button 
                                innerText={innerText}
                                clickEvent={wrapper}
                            />
                            <Button 
                                innerText={"Отмена"}
                                clickEvent={()=> setEditMode(false)}
                            />
                        </>
                    :
                        <div onClick={()=> setEditMode(true)}>
                            <p>{value}</p>
                        </div>
            }
        </>
    )
}

export default SelectField