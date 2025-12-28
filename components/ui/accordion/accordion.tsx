'use client'

import './accordion.css'
import React from 'react'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'

type AccordionProps = {
    pergunta: string
    resposta: string

}

export default function Accordion({pergunta,resposta}:AccordionProps){
    const [open,setOpen] = React.useState(false);
    return(
        <>
            {open ? (
                <div className='accordion-container'>
                    <div className='accordion-block'>
                        <p className='accordion-pergunta'>{pergunta}</p>
                        <FaChevronDown className='accordion-icon' onClick={() => setOpen(false)}></FaChevronDown>
                    </div>
                    <p className='accordion-resposta subtitle'>{resposta}</p>
                </div>
            ):(
                <div className='accordion-container'>
                    <div className='accordion-block'>
                        <p className='accordion-pergunta'>{pergunta}</p>
                        <FaChevronRight className='accordion-icon' onClick={() => setOpen(true)}></FaChevronRight>
                    </div>
                </div>
            )}
        </>
    )
}