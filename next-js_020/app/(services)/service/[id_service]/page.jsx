import Srv1 from "../../components/Service1";
import Srv2 from "../../components/Service2";
import Srv3 from "../../components/Service3";

// ------------------------------------
export default function Service({params}) {

    const componentes = [
        <Srv1 />,
        <Srv2 />,
        <Srv3 />
    ];

    return (
        <>
            {componentes[params.id_service - 1]}
        </>
    )
}