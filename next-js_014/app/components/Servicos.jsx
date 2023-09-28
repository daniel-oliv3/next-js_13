import Link from "next/link";

// --------------------------------------------
export default function Servicos() {
  return (
    <>
      <section className="home-services">
        <h1 className="text-center mb-5">Conheça os nossos serviços</h1>
        <div className="text-center">
          <Link href="/services" className="services-button">Serviços</Link>         
        </div>
      </section>
    </>
  );
}
