function CheckBox({
    onChange, 
    value, 
    label
    }) {
    
    function changeEvent() {
        onChange(!value)
    }

    return (
        <div className="checkbox-container">
            {
                label && 
                <div className="label-container">
                    {label}
                </div>
            }
            <input 
                type='checkbox' 
                checked={value}
                value={value} 
                onChange={changeEvent} 
            />
        </div>
    )
}

export default CheckBox