'use client'

import comites from '@/data/comites.json'
import './delegacoes.css'
import Link from 'next/link'

type DelegacoesProps = {
    idComite:number
}

export default function Delegacoes({idComite}:DelegacoesProps){
    return (
        <>
            {comites[idComite - 1].delegacoes.length === 0 ? (
                <p>Nenhuma delegação registrada</p>
            ):(
                <div className='delegacoes-container'>
                {comites[idComite - 1].delegacoes.map((delegacao,index) =>{
                    return (
                    <div key={index} className='home-delegacao-container'>
                        <h2 className='home-delegacao-title'>{delegacao}</h2>
                        <img className='home-delegacao-img' src={`/images/delegacoes/${delegacao}.png`} alt="" />
                    </div>
                    )
                })}
                </div>
            )}
        </>
    )
}