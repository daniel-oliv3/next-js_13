
export default function Button(props){
    return (
        <>
            <a href={props.endereco} className="btn btn-primary">{props.texto}</a>
        </>
    )
}