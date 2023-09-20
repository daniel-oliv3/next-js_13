import HomeIntro from "./components/HomeIntro";
import Servicos from "./components/Servicos";
import Contatos from "./components/Contatos";


const estilos = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "black",
  color: "white",
};


estilos.color = "red";


// ----------------------------------------------------------------
export default function Home() {
  return (
    <>
      <nav style={estilos}>
        <div>
          <h3>A Minha Empresa</h3>
        </div>
        <div>[links]</div>
      </nav>

      <HomeIntro />
      <Servicos />
      <Contatos />
    </>
  );
}




// ----------------------------------------------------------------
// export default function Home() {
//   return (
//     <>

//     <nav style={
//       {
//         display: 'flex',
//         justifyContent: 'space-between',
//         backgroundColor: 'black',
//         color: 'white',
//       }
//     }>
//       <div>
//         <h3>A Minha Empresa</h3>
//       </div>
//       <div>
//         [links]
//       </div>
//     </nav>

//       <HomeIntro />
//       <Servicos />
//       <Contatos />
//     </>
//   )
// }
