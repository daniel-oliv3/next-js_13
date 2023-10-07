import "./Nav.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
    return (
        <nav className="nav-wrapper">
            <div>
                <Image src="/assets/logo_512.png" width={50} height={50} alt="Logo da Empresa" />
            </div>
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