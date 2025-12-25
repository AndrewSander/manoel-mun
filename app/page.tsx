'use client'

import Header from '../components/layout/header'
import HeroFade from '../components/ui/heroFade'
import Btn from '../components/ui/button/btn'
import News from '../components/ui/news/news'
import { FaLandmark, FaComments, FaHandshake } from 'react-icons/fa'
import Counter from '../components/ui/counter/animatedCounter'

export default function Home(){
  return(
    <>
      <Header></Header>
      <HeroFade></HeroFade>
      <Btn text="INSCREVA-SE"></Btn>
      <section className='introduction'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QUTWCdRI078"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <News></News>
      </section>  
      <section className='figures'>
        <div className='figure'>
          <FaComments size={180} />
          <p>Negocie com outras delegações</p>
        </div>
        <div className='principal figure'>
          <FaLandmark size={180} />
          <p>Aprenda geopolítica enquanto debate</p>
        </div>
        <div className='figure'>
          <FaHandshake size={180} />
          <p>Elabore tratados em equipe</p>

        </div>
      </section>
      {/* <Counter end={120} duration={10000}></Counter> */}
    </>
  )
}