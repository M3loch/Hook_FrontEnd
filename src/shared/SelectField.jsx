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
        <div className="field">
            {
                editMode
                    ?
                        <>
                            <div className="value-container" >
                            
                                <Select
                                    selectorName={placeholder}
                                    options={options}
                                    setOption={setValue}
                                    byIndex={byIndex}
                                />
                            </div>
                            <>
                                <Button 
                                    innerText={innerText}
                                    clickEvent={wrapper}
                                    />
                                <Button 
                                    className={'hollow-button'}
                                    innerText={"Отмена"}
                                    clickEvent={()=> setEditMode(false)}
                                    />
                            </>
                        </>
                    :
                        <div 
                            className="value-container" 
                            onClick={()=> setEditMode(true)}>
                            <p>{value}</p>
                        </div>
            }
        </div>
    )
}

export default SelectField