'use client'

import './btn.css'

type BtnProps = {
    Icon?: React.ElementType
    text: string
}

export default function Btn({Icon, text}:BtnProps){
    return(
        <div className="btn">
            {Icon && <Icon/>}
            <h2><a href="#">{text}</a></h2>
        </div>
    )
}