import './Viagem.css'
function Viagem(props){
    function delete_viagem(id) {
        fetch(`http://localhost:8080/viagem/AccessAgenteKeyCorret/delete/${id}`, {
            method: "DELETE"
        }).then((res) => res.json())
        alert('Delete successfully')
    }
    let edit = `/CU_Viagens/${props.id}`
    return (
        <div className="Viagem">
            <strong className='id'>
                <div>ID: {props.id}</div>
                <div>IMO: {props.imo}</div>
            </strong>
            <div className='intro'>
                <h4 className='info'>
                    Partida: {props.porto_partida} {props.horario_partida} / Chegada: {props.porto_chegada} {props.horario_chegada}
                </h4>
                <h4 className='info'>
                    Passageiros: {props.qtd_passageiros} / Carga: {props.qtd_carga} / Registrador: {props.user}
                </h4>
            </div>
            <div className='controls'>
                <button className='btn_update' href={edit}>Edit</button>
                <button className='btn_delete' onClick={()=>delete_viagem(props.id)}>Delete</button>
            </div>
        </div>
    )
}
export default Viagem