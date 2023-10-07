import Link from "next/link";

// --------------------------------------------
export default function Contatos() {
  return (
    <>
      <section className="home-contato">
        <h1 className="text-center mb-5">Entre em Contato</h1>
        <div className="text-center">
          <Link href="/contacts" className="contato-button">Contatos</Link>
        </div>
      </section>
    </>
  );
}
