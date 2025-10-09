import { useState } from 'react'
import './styles/copyText.css'

function CopyText({value, className}){

    const [copyStatus, setCopyStatus] = useState(false)

    function copy(){
        navigator.clipboard.writeText(value)
        setCopyStatus(true)
        setTimeout(()=> setCopyStatus(false), 1000)
    }

    return(
        <div 
            className={className}
            onClick={copy}
        >
            <div className="copy-text">
                {value}
            <span className='copy-tooltip'>Копировать</span>
            {
                copyStatus
                    ? <div className='copy-status ok'>скопированно</div>
                    : <div className='copy-status'>скопированно</div>
            }
            </div>
        </div>
)


}

export default CopyText