import noticias from '@/data/noticias.json'
import { notFound } from 'next/navigation'
import './page.css'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function NoticiaPage({ params }: PageProps) {
  const { id } = await params
  
  const noticiaId = Number(id)

  const noticia = noticias.find((n) => n.id === noticiaId)

  if (!noticia) {
    return notFound() 
  }

  return (
    <>
      <section className='body'>
        <div className='news-content'>
          <div className='news-title'>
            <p className='data'>{noticia.data}</p>
            <h1 className='news-title'>{noticia.titulo}</h1>
            <h2 className="news-subtitle">{noticia.subtitulo}</h2>
          </div>
          <img
            src={noticia.imagem}
            alt={noticia.titulo}
            className=""
          />'
        </div>
      
        <p>{noticia.mensagem}</p>
      </section>
    </>
  )
}

