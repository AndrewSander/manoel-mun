import Header from '../../../../components/layout/header';
import comites from '@/data/comites.json';
import { notFound } from 'next/navigation';
import Btn from '@/components/ui/button/btn'
import './page.css'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function Comites({params} : PageProps){
    const {id} = await params

    const comiteId = Number(id);

    const comite = comites.find((n) => n.id === comiteId)

    if (!comite) {
        return notFound()
    }

    return(
        <>
            <Header></Header>
            <div className='comite-container'>
                <div className='comite-topo'>
                    <div className='comite-info'>
                        <div>
                            <div className='comite-logo'>
                                <h1 className='title'>{comite.nome}</h1>
                                <img className='comite-img' src={`/images/comites/${comite.nome}.png`} alt={comite.nome} />
                            </div>
                            <h2 className='subtitle'>{comite.tema}</h2>
                        </div>
                        <Btn text="INSCREVA-SE"></Btn>
                        <p>{comite.descricao}</p>
                        <div>
                            <p><span className='subtitle'>Diretor(a):</span> {comite.diretor} </p>
                            <p><span className='subtitle'>Vagas:</span> {comite.delegados} vagas disponíveis </p>
                            <p><span className='subtitle'>Mesa Diretora:</span> {comite.mesa.join(', ')} </p>
                            <p><span className='subtitle'>Membros da AC:</span> {comite.ac.join(', ')}</p>
                        </div>
                    </div>
                    <div>
                        <iframe
                        width="650"
                        height="420"
                        src={comite.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </>
    )
}