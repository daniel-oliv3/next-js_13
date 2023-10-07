import Navegacao from "./nav";


export default function ServicesLayout({children}) {
    return (
        <>
            <div style={{backgroundColor: "red", color: "white", padding: "10px"}}>
                Layout excluisivo dos Services
            </div>
            <Navegacao />
            {children}
        </>
    )
}