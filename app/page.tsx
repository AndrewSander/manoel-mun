'use client'

import Header from '../components/layout/header'
import HeroFade from '../components/ui/heroFade'
import Btn from '../components/ui/button/btn'

export default function Home(){
  return(
    <>
      <Header></Header>
      <HeroFade></HeroFade>
      <Btn text="INSCREVA-SE"></Btn>
    </>
  )
}