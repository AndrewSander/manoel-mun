'use client'

import './btn.css'

type BtnProps = {
    Icon?: React.ElementType
    text: string
    size?: string
}

export default function Btn({Icon, text, size = 'n'}:BtnProps){
    return(
        size === 'p' ? (
            <div className="btn btn-p">
                {Icon && <Icon/>}
                <h2>{text}</h2>
            </div>
        ):(
            <div className="btn btn-n">
                {Icon && <Icon/>}
                <h2>{text}</h2>
            </div>
        )
    )
}