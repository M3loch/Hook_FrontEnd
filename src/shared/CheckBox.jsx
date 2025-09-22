function CheckBox({
    innerText,
    onChange, 
    value, 
    }) {
    
    function changeEvent(event) {
        onChange(!value)
    }

    return (
        <input type='checkbox' checked={value} name={innerText} value={value} onChange={changeEvent} />
    )
}

export default CheckBox