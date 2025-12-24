'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import './header.css';

export default function Header(){
    const url = usePathname();
    return(
    
        <div className="header-container">
            <Link href="/"><img className="logo" src="/images/logo/white.png" alt="LOGO"/></Link>
            <ul className="links">
                <li className={url === '/' ? 'active' : ''}> <Link href="/">INÍCIO</Link> </li>
                <li className={url === '/sobre' ? 'active' : ''}> <Link href="/sobre">SOBRE</Link> </li>
                <li className={url === '/delegates' ? 'active' : ''}> <Link href="/delegates"> GANHADORES </Link></li>
                <li className={url === '/documentos' ? 'active' : ''}> <Link href="/documentos"> DOCUMENTOS</Link> </li>
            </ul>
        </div>
        
    )
}