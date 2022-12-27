import './Navio.css'
function Navio(props){
    function delete_navio(imo) {
        fetch(`http://localhost:8080/navio/AccessAgenteKeyCorret/delete/${imo}`, {
            method: "DELETE"
        }).then((res) => res.json())
        alert('Delete successfully')
    }
    let edit = `/CU_Navios/${props.imo}`
    return(
        <div className="Navio">
            <strong className='id'>
                <div>IMO:</div>
                <div> {props.imo}</div>
            </strong>
            <div className='intro'>
                <h4 className='info'>
                    Nome: {props.nome} | Proprietario: {props.proprietario}
                </h4>
                <h4 className='info'>
                    Tipo:{props.tipo} | Max Carga: {props.maxcarga} | Max Passageiros = {props.maxpassageiros}
                </h4>
            </div>
            <div className='controls'>
                <button className='btn_update'><a href={edit}>Edit</a></button>
                <button className='btn_delete' onClick={()=>delete_navio(props.imo)}>Delete</button>
            </div>
        </div>
    )
}

export default Navio