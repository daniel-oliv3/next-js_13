import Link from 'next/link'

export default function Nav(){
    return (
        <>
            <nav>
                <Link href="/home">Ínicio</Link> | 
                <Link href="/servicos">Serviços</Link> | 
                <Link href="/servicos/manutencao">Manutenção</Link> | 
                <Link href="/contato">Contato</Link> | 
                <hr />
            </nav>
        </>
    )
} 