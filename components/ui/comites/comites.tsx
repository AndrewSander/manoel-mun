'use client'

import comites from '@/data/comites.json'
import './comites.css'
import Link from 'next/link'

export default function Comites(){
    return (
        <>
            {comites.length > 0 ? (
                <div className='comites-container'>
                {comites.map((comite) =>{
                    return (
                    <div key={comite.id} className='home-comite-container'>
                            <h2 className='hone-comite-title'>{comite.nome}</h2>
                        <Link className='link' href={`/comites/${comite.id}`}>
                            <img className='home-comite-img' src={`images/comites/${comite.nome}.png`} alt="" />
                        </Link>
                    </div>
                    )
                })}
                </div>
            ):(
                <p>Nenhum comitê disponível</p>
            )}
        </>
    )
}