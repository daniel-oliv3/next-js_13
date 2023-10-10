export default function Cliente({params: {identificacao}}){

    const nome = identificacao[0];
    const sobrenome = identificacao[1];

    return (
        <>
            <h1>Nome do cliente: {nome} </h1>


            <h1>Nome completo do cliente: {nome + " " + sobrenome} </h1>
        </>
    )
}










// export default function Cliente({params}){
//     return (
//         <>
//             {/* <p>Cliente: <span>{params.nome}</span></p> */}
//             <p>Nome do cliente: <span>{params.identificacao[0]}</span></p>


//             <p>Nome completo do cliente: <span>{params.identificacao[0] + " " + params.identificacao[1]}</span></p>
//         </>
//     )
// }