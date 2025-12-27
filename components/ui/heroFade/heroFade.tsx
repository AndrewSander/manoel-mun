'use client'
import './heroFade.css';

export default function HeroFade(){
    return(
        <>
            <section className='hero'>
                <img className='banner' src='/images/banner.jpg' alt="banner" />
                <div className='hero-info'>
                    <h1>MANOEL MUN</h1>
                    <p>A maior simulação do alto sertão sergipano</p>
                </div>
            </section>

        </>
    )
}