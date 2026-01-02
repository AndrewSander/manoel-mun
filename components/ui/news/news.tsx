'use client'

import noticias from '@/data/noticias.json'
import './news.css'
import Link from 'next/link'

type PageProps = {
    grid:boolean
    slice?:number
    id?:number
}

export default function News({grid,slice=4,id}:PageProps){
    return(
        <div className="news">
            {noticias.length === 0 ? (
                <p>Nenhuma notícia encontrada</p>
            ) : (
                grid === false ? (
                    <ul className='news-container'>
                        {noticias.filter(item => item.id != id ).slice(0,slice).map((noticia) => (
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
                ):(
                    <ul className='news-container-grid'>
                        {noticias.map((noticia) => (
                            <li key={noticia.id} className='noticia grid-item'>
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
                )
            )}
        </div>
    )
}


// 'use client'

// import noticias from '@/data/noticias.json'
// import './news.css'
// import Link from 'next/link'

// export default function News(){

//     return(
//         <div className="news">
//             <h3>IMMUN NEWS</h3>
//             {noticias.length === 0 ? (
//                 <p>Não encontrado</p>
//             ) : (
//                 <ul className='news-container'>
//                     {noticias.slice(0,4).map((noticia) => (
//                         <li key={noticia.id} className='noticia'>
//                             <Link href={`/noticias/${noticia.id}`} className='noticia-link'>
//                                 <img src={noticia.imagem} alt={`imagem {noticia.id}`}/>
//                                 <div className='noticia-texto'>
//                                     <h4>{noticia.titulo}</h4>
//                                     <p>{noticia.data}</p>
//                                 </div>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     )
// }