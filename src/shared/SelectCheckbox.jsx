import { useState } from "react"
import Button from "./Button"
import CheckBox from "./CheckBox"


function SelectCheckbox({
    value, 
    setValue, 
    callBack, 
    innerText, 
    }){
    
    const [editMode, setEditMode] = useState(false)

    function wrapper(){
        callBack()
        setEditMode(false)
    }


    return (
        <>
            {
                editMode
                    ?
                        <>
                            <CheckBox
                                onChange={setValue}
                                value={value}
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
                            <p>{String(value)}</p>
                        </div>
            }
        </>
    )
}

export default SelectCheckbox