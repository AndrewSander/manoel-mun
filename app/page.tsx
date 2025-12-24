'use client'

import Header from '../components/layout/header'
import HeroFade from '../components/ui/heroFade'
import Btn from '../components/ui/button/btn'
import News from '../components/ui/news/news'

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
    </>
  )
}