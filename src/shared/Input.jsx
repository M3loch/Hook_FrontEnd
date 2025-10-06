function Input({
    placeholder,
    onChange, 
    value, 
    type = 'text',
    sideEffect = null, 
    max = null,
    min = null 
    }) {

    function maxCallback(){
        onChange(max)
    }
    function minCallback(){
        onChange(min)
    }

    function changeEvent(event) {
        sideEffect && sideEffect(event.target.value)
        onChange(event.target.value)

        max !== null
            ? 
                (type == 'number' && event.target.value > max) && maxCallback
                (type == 'text' && event.target.valu.length > max) && maxCallback
            : null

        min !== null
            ? 
                (type == 'number' && event.target.value < min) && minCallback
                (type == 'text' && event.target.valu.length < min) && minCallback
            : null
            
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={changeEvent} />
    )
}

export default Input