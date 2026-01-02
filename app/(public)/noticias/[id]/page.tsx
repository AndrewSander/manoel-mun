import noticias from '@/data/noticias.json'
import { notFound } from 'next/navigation'
import News from '@/components/ui/news/news'
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
    <section className='news-id'>
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
          />
        </div>
        <p className='noticia-mensagem'>{noticia.mensagem}</p>
      </section>
      <section className="more-news">
        <h3 className='news-title-home'> OUTRAS NOTÍCIAS </h3>
        <News grid={false} slice={6} id={noticiaId}>
        </News>
      </section>
    </section>
  )
}

