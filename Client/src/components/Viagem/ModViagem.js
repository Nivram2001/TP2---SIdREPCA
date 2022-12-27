import './ModViagem.css'
import { useState } from 'react'
function ModViagem() {
    const [portoPartida, setPortoPartida] = useState('')
    const [portoChegada, setPortoChegada] = useState('')
    const [dataPartida, setDataPartida] = useState()
    const [dataChegada, setDataChegada] = useState()
    const [qtdCarga, setQtdCarga] = useState(0)
    const [qtdPessoas, setQtdPessoas] = useState(0)
    const [imo, setImo] = useState()
    const [userId, setUserId] = useState()

    const handlePPChange = (e) => {
        setPortoPartida(e.target.value)
    }
    const handlePCChange = (e) => {
        setPortoChegada(e.target.value)
    }
    const handleDataPChange = (e) => {
        setDataPartida(e.target.value)
    }
    const handleDataCChange = (e) => {
        setDataChegada(e.target.value)
    }
    const handleQCChange = (e) => {
        setQtdCarga(e.target.value)
    }
    const handleQPChange = (e) => {
        setQtdPessoas(e.target.value)
    }
    const handleIMOChange = (e) => {
        setImo(e.target.value)
    }
    const handleUIChange = (e) => {
        setUserId(e.target.value)
    }
    function handleviagemSubmit(e) {
        let registo = {
            "porto_partida": portoPartida,
            "porto_chegada": portoChegada,
            "horario_partida": dataPartida,
            "horario_chegada": dataChegada,
            "qtd_carga": qtdCarga,
            "qtd_passageiros": qtdPessoas,
            "imo_navio": imo,
            "user_registo": userId,
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registo)
        }
        fetch('http://localhost:8080/viagem/AccessAgenteKeyCorret/novaviagem', options).then(data => {
            if (!data.ok) {
                throw Error(data.status);
            } else {
                alert('success')
            }
            return data.json()
        }).then(registo => {
            console.log(registo)
        }).catch(e => {
            console.log(e)
        })
        
    }


    return (
        
        <form onSubmit={(e) => { handleviagemSubmit(e) }} className='box'>
            <h2>VIAGEM</h2>
            <hr></hr>
            <div className='inputs'>
                <h4>Porto partida:
                    <input placeholder='Inserir porto de partida' type='text' value={portoPartida}
                        onChange={(e) => handlePPChange(e)} ></input></h4>
                <h4>Porto chegada:
                    <input placeholder='Inserir porto de destino' type='text' value={portoChegada}
                        onChange={(e) => handlePCChange(e)} ></input></h4>
                <h4>Horario partida:
                    <input className='datetime' type='datetime-local' value={dataPartida}
                        onChange={(e) => handleDataPChange(e)} ></input></h4>
                <h4>Horario chegada:
                    <input className='datetime' type='datetime-local' value={dataChegada}
                        onChange={(e) => handleDataCChange(e)} ></input></h4>
                <h4>Qtd carga:
                    <input placeholder='Qtd em toneladas' type='number' value={qtdCarga}
                        onChange={(e) => handleQCChange(e)} ></input></h4>
                <h4>Qtd passageiros:
                    <input placeholder='Numero de pessoas' type='number' value={qtdPessoas}
                        onChange={(e) => handleQPChange(e)} ></input></h4>
                <h4>IMO:
                    <input placeholder='IMO do Navio' type='number' value={imo}
                        onChange={(e) => handleIMOChange(e)} ></input></h4>
                <h4>User_id:
                    <input placeholder='ID do Agente' type='number' value={userId}
                        onChange={(e) => handleUIChange(e)} ></input></h4>
            </div>
            <button  type='submit' value='submit' className='btn_confirm'>Confirm</button>
            <button className='btn_cancel'><a href='/Viagens'>Cancel</a></button>

        </form>
    )
}

export default ModViagem