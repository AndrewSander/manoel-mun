'use client'

import Header from '../components/layout/header'
import HeroFade from '../components/ui/heroFade/heroFade'
import Btn from '../components/ui/button/btn'
import News from '../components/ui/news/news'
import { FaLandmark, FaComments, FaHandshake } from 'react-icons/fa'
import Counter from '../components/ui/counter/animatedCounter'
import Comites from "@/components/ui/comites/comites" 

export default function Home(){
  return(
    <>
      <Header></Header>
      <HeroFade></HeroFade>
      <div className='center'>
        <Btn text="INSCREVA-SE"></Btn>
      </div>
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
      <section className='counter-container'>
        <h2 className='counter-title'>NOSSOS NÚMEROS</h2>
        <div className='counter'>
          <div className='counter-l2'>
            <div className='counter-l1'>
              <p className='counter-plus'>+</p>
              <Counter end={200} duration={1500}></Counter>
            </div>
            <p className='counter-text'>DELEGADOS PARTICIPARAM</p>
          </div>
          <div className='counter-l2'>
            <div className='counter-l1'>
              <p className='counter-plus'>+</p>
              <Counter end={15} duration={1500}></Counter>
            </div>
            <p className='counter-text'>COMITÊS SIMULADOS</p>
          </div>
          <div className='counter-l2'>
            <div className='counter-l1'>
              <p className='counter-plus'>+</p>
              <Counter end={14} duration={1500}></Counter>
            </div>
            <p className='counter-text'>ESCOLAS PARCEIRAS</p>
          </div>
        </div>
      </section>
      <section className='home-comites'>
        <h2 className='counter-title'>NOSSOS COMITÊS</h2>
        <Comites></Comites>
      </section>
    </>
  )
}