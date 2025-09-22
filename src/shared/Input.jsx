function Input({
    placeholder,
    onChange, 
    value, 
    type = 'text',
    sideEffect = null, 
    max = null, 
    maxCallback = null
    }) {
    
    function changeEvent(event) {
        max !== null
            ? 
                (type == 'number' && event.target.value > max) && maxCallback
                (type == 'text' && event.target.valu.length > max) && maxCallback
            : null
        onChange(event.target.value)
        sideEffect && sideEffect()
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={changeEvent} />
    )
}

export default Input