import Link from 'next/link'
import nav from './nav.module.css'




export default function Nav(){
    return (
        <>
            <nav className={nav.navWrapper}>
                <Link className={nav.link} href="/home">Ínicio</Link> | 
                <Link className={nav.link} href="/servicos">Serviços</Link> | 
                <Link className={nav.link} href="/servicos/manutencao">Manutenção</Link> | 
                <Link className={nav.link} href="/contato">Contato</Link> | 
                <hr />
            </nav>
        </>
    )
} 