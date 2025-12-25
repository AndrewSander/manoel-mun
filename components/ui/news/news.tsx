'use client'

import noticias from '@/data/noticias.json'
import './news.css'
import Link from 'next/link'

export default function News(){

    return(
        <div className="news">
            <h3>IMMUN NEWS</h3>
            <ul className='news-container'>
                {noticias.slice(0,4).map((noticia) => (
                    <li key={noticia.id} className='noticia'>
                        <Link href={`/noticias/${noticia.id}`} className='noticia-link'>
                            <img src={noticia.imagem} alt={`imagem {noticia.id}`}/>
                            <div className='noticia-texto'>
                                <h4>{noticia.titulo}</h4>
                                <p>{noticia.data}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}