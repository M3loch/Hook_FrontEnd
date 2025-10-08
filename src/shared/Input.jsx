function Input({
    placeholder,
    onChange, 
    value, 
    type = 'text',
    sideEffect = null, 
    max = null,
    min = null
    }) {

    function changeEvent(event) {
        let value = event.target.value
        sideEffect && sideEffect(event.target.value)

        if (max !== null && type == 'number' && value > max) {
             onChange(max)
             return
        }
        if (min !== null && type == 'number' && value < min) {
            onChange(min)
            return
       }
        

        if (type == 'number' && typeof(Number(value.slice(-1))) !== 'number') {
            return
        }
        type == 'number'
            ? onChange(Number(value))
            : onChange(value)
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={changeEvent} />
    )
}

export default Input