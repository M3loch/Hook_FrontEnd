function CheckBox({
    onChange, 
    value, 
    }) {
    
    function changeEvent() {
        onChange(!value)
    }

    return (
        <input 
            type='checkbox' 
            checked={value}
            value={value} 
            onChange={changeEvent} 
        />
    )
}

export default CheckBox