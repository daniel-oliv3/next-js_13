import Image from "next/image";


// --------------------------------------------
export default function HomeIntro() {
    return (
        <>
            <section className="home-wrapper">
                <div className="text-center">
                    <Image src="/assets/logo_512.png" width={100} height={100} alt="Logo da Empresa" />
                </div>
                <h1 className="mb-3">Bem-vindo á Nossa Empresa!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, amet?</p>
            </section>
        </>
    )
}