import { useEffect, useRef } from "react"

function Textarea({
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

    const textareaRef = useRef(null);

    useEffect(() => {
      if (textareaRef.current) {
        // Сбрасываем высоту, чтобы получить реальную высоту контента
        textareaRef.current.style.height = 'auto';
        // Устанавливаем новую высоту, равную высоте содержимого
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight - 40}px`;
      }
    }, [value]); // Пересчитываем при каждом изменении текста

    return (
        <textarea ref={textareaRef} type={type} placeholder={placeholder} value={value} onChange={changeEvent} />
    )
}

export default Textarea