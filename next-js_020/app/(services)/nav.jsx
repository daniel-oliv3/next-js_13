import Link from "next/link";

import './nav.css';

// Functional Component ------------------------------------------
export default function Nav() {
    return (
        <>
            <nav>
                <Link className="link_nav" href="/service/1">Serviço 1</Link>  |  
                <Link className="link_nav" href="/service/2">Serviço 2</Link>  |  
                <Link className="link_nav" href="/service/3">Serviço 3</Link> 
            </nav>
        </>
    )
}












// import Link from "next/link";

// ArowFunction ------------------------------------------
// export default () => {
//     return (
//         <>
//             <nav>
//                 <Link href="service/1">Serviço 1</Link>
//                 <Link href="service/2">Serviço 2</Link>
//                 <Link href="service/3">Serviço 3</Link>
//             </nav>
//         </>
//     )
// }