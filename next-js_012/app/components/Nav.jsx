import "./Nav.css";
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="nav-wrapper">
            <div>Minha Empresa</div>
            <div>
                <Link href="/" className="link">Home</Link>
                <span> | </span>
                <Link href="/services" className="link">Serviços</Link>
                <span> | </span>
                <Link href="/contacts" className="link">Contatos</Link>
            </div>
        </nav>
    )
}