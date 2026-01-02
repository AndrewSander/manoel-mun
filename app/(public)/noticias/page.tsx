'use client'

import './page.css'
import News from '@/components/ui/news/news'

export default function NewsPage(){
    return(
        <>
            <News grid={true}></News>
        </>
    )
}