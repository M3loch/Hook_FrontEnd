import { useState } from "react"
import Input from "./Input"
import Button from "./Button"


function Field({value, setValue, callBack, placeholder, innerText}) {
    
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
                            <Input 
                                placeholder={placeholder}
                                value={value}
                                onChange={setValue}
                            />
                            <Button 
                                innerText={innerText}
                                clickEvent={wrapper}
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

export default Field